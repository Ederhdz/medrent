import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join } from "node:path";

export const CMS_ASSETS_PREFIX = "/cms-assets/";
export const MEDIA_PROXY_PREFIX = "/api/media-proxy?u=";

export const STRAPIAPP_HOST_RE = /(?:^|\.)(?:media\.)?strapiapp\.com$/i;
export const STRAPI_MEDIA_URL_RE =
  /https?:\/\/[^"'\\\s>]*\.(?:media\.)?strapiapp\.com[^"'\\\s>]*/gi;

const MEDIA_EXT_RE = /\.(avif|webp|jpe?g|png|gif|svg|ico|bmp|tiff?)(?:$|\?)/i;

export function sha256Hex(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

export function shortContentHash(buffer, length = 16) {
  return sha256Hex(buffer).slice(0, length);
}

export function requireCmsReleaseMode(env = process.env) {
  const mode = String(env.CMS_RELEASE_MODE || "").trim();
  if (mode !== "live" && mode !== "snapshot") {
    throw new Error(
      "CMS_RELEASE_MODE is required and must be 'live' or 'snapshot'. Missing Vercel env is BLOCKED_CONFIG, not a silent default to live.",
    );
  }
  return mode;
}

export function isSnapshotMode(env = process.env) {
  return requireCmsReleaseMode(env) === "snapshot";
}

export function isRuntimeStrapiDisabled(env = process.env) {
  return String(env.CMS_RUNTIME_STRAPI_DISABLED || "") === "1";
}

export function requireStrapiUrl(env = process.env) {
  const raw = String(env.STRAPI_URL || "").trim();
  if (!raw) {
    throw new Error("Missing STRAPI_URL");
  }
  try {
    const url = new URL(raw.replace(/\/+$/, ""));
    return url;
  } catch {
    throw new Error(`STRAPI_URL must be an absolute URL. Received: ${raw}`);
  }
}

export function normalizeStrapiApiBase(rawUrl) {
  const trimmed = String(rawUrl || "").replace(/\/+$/, "");
  if (!trimmed) {
    throw new Error("Missing STRAPI_URL");
  }
  const url = new URL(trimmed);
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
}

export function configuredStrapiHostname(env = process.env) {
  return requireStrapiUrl(env).hostname;
}

export function normalizeRequestKey(path) {
  const raw = String(path || "").trim();
  if (!raw) {
    throw new Error("CMS request key must be a non-empty path");
  }
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  const qIndex = withSlash.indexOf("?");
  if (qIndex === -1) return withSlash;
  const pathname = withSlash.slice(0, qIndex);
  const params = new URLSearchParams(withSlash.slice(qIndex + 1));
  params.sort();
  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function isStrapiMediaUrl(value, strapiHostname) {
  if (!value || typeof value !== "string") return false;
  const trimmed = value.trim();
  if (trimmed.startsWith(CMS_ASSETS_PREFIX) || trimmed.startsWith(MEDIA_PROXY_PREFIX)) {
    return false;
  }
  try {
    const absolute =
      trimmed.startsWith("//")
        ? `https:${trimmed}`
        : trimmed.startsWith("http://") || trimmed.startsWith("https://")
          ? trimmed
          : null;
    if (absolute) {
      const host = new URL(absolute).hostname;
      if (STRAPIAPP_HOST_RE.test(host)) return true;
      if (strapiHostname && host === strapiHostname) {
        return MEDIA_EXT_RE.test(absolute) || absolute.includes("/uploads/");
      }
      return false;
    }
    return trimmed.startsWith("/uploads/");
  } catch {
    return false;
  }
}

export function absolutizeMediaUrl(value, strapiOrigin) {
  const trimmed = String(value).trim();
  if (trimmed.startsWith("//")) return `https:${trimmed}`;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  const origin = String(strapiOrigin || "").replace(/\/+$/, "");
  return `${origin}${trimmed.startsWith("/") ? "" : "/"}${trimmed}`;
}

export function collectMediaUrls(value, strapiHostname, strapiOrigin, out = new Set()) {
  if (typeof value === "string") {
    if (isStrapiMediaUrl(value, strapiHostname)) {
      out.add(absolutizeMediaUrl(value, strapiOrigin));
    }
    return out;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectMediaUrls(item, strapiHostname, strapiOrigin, out);
    return out;
  }
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) {
      collectMediaUrls(item, strapiHostname, strapiOrigin, out);
    }
  }
  return out;
}

export function rewriteMediaUrls(value, urlToLocal, strapiHostname, strapiOrigin) {
  if (typeof value === "string") {
    if (!isStrapiMediaUrl(value, strapiHostname)) return value;
    const absolute = absolutizeMediaUrl(value, strapiOrigin);
    return urlToLocal.get(absolute) || value;
  }
  if (Array.isArray(value)) {
    return value.map((item) =>
      rewriteMediaUrls(item, urlToLocal, strapiHostname, strapiOrigin),
    );
  }
  if (value && typeof value === "object") {
    const out = Array.isArray(value) ? [] : {};
    for (const [key, item] of Object.entries(value)) {
      out[key] = rewriteMediaUrls(item, urlToLocal, strapiHostname, strapiOrigin);
    }
    return out;
  }
  return value;
}

export function liveProxyUrl(absoluteUrl) {
  return `${MEDIA_PROXY_PREFIX}${encodeURIComponent(absoluteUrl)}`;
}

export function hashedAssetPath(buffer, sourceUrl) {
  const hash = shortContentHash(buffer);
  let ext = "";
  try {
    const pathname = new URL(sourceUrl).pathname;
    ext = extname(pathname).toLowerCase();
  } catch {
    ext = "";
  }
  if (!ext || ext.length > 8) ext = ".bin";
  return `${CMS_ASSETS_PREFIX}${hash}${ext}`;
}

export function computeFingerprint(requests, mediaHashes) {
  const requestKeys = Object.keys(requests).sort();
  const mediaKeys = Object.keys(mediaHashes).sort();
  const payload = JSON.stringify({
    requests: requestKeys.map((key) => [key, requests[key]]),
    media: mediaKeys.map((url) => [url, mediaHashes[url]]),
  });
  return sha256Hex(payload);
}

export function emptySnapshot(site = "medrent") {
  return {
    site,
    generatedAt: null,
    cmsFingerprint: null,
    requestCount: 0,
    assetCount: 0,
    assetBytes: 0,
    gitSha: null,
    mode: "snapshot",
    requests: {},
  };
}

export async function wipeGeneratedOutputs(rootDir) {
  const snapshotPath = join(rootDir, "src/generated/cms-snapshot.json");
  const assetsDir = join(rootDir, "public/cms-assets");
  if (existsSync(snapshotPath)) {
    await rm(snapshotPath, { force: true });
  }
  if (existsSync(assetsDir)) {
    const entries = await readdir(assetsDir, { withFileTypes: true });
    await Promise.all(
      entries
        .filter((entry) => entry.name !== ".gitkeep")
        .map((entry) => rm(join(assetsDir, entry.name), { recursive: true, force: true })),
    );
  }
  await mkdir(dirname(snapshotPath), { recursive: true });
  await mkdir(assetsDir, { recursive: true });
  const gitkeep = join(assetsDir, ".gitkeep");
  if (!existsSync(gitkeep)) {
    await writeFile(gitkeep, "");
  }
}

export async function writeJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

export function scanTextForCmsLeaks(text, extraHosts = []) {
  const findings = [];
  if (/\.media\.strapiapp\.com/i.test(text) || /https?:\/\/[^"'\\\s]*\.strapiapp\.com/i.test(text)) {
    findings.push("strapiapp.com");
  }
  if (/\/api\/strapi(?:\/|"|'|\?|\s|$)/.test(text)) {
    findings.push("/api/strapi");
  }
  if (/\/api\/media-proxy\?u=/.test(text)) {
    findings.push("/api/media-proxy?u=");
  }
  for (const host of extraHosts) {
    if (host && text.includes(host)) findings.push(host);
  }
  return findings;
}

export async function scanDirectoryForLeaks(dir, extraHosts = []) {
  const findings = [];
  if (!existsSync(dir)) return findings;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (!/\.(html|js|mjs|cjs|css|json|txt|xml|map)$/i.test(entry.name)) continue;
      const text = await readFile(full, "utf8");
      const hits = scanTextForCmsLeaks(text, extraHosts);
      if (hits.length) {
        findings.push({ file: full, hits: [...new Set(hits)] });
      }
    }
  }
  return findings;
}

export function sourceBoundaryAllowlist() {
  return [
    "src/server/cms/",
    "scripts/",
    "tests/cms/",
    "docs/",
    "src/pages/api/media-proxy.ts",
    "src/pages/api/strapi/",
    "src/generated/",
  ];
}

export function isAllowlistedSourcePath(relativePath, allowlist = sourceBoundaryAllowlist()) {
  const normalized = relativePath.replaceAll("\\", "/");
  return allowlist.some(
    (entry) => normalized === entry || normalized.startsWith(entry),
  );
}
