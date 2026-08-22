import { execSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  collectMediaUrls,
  computeFingerprint,
  configuredStrapiHostname,
  isSnapshotMode,
  normalizeRequestKey,
  normalizeStrapiApiBase,
  requireCmsReleaseMode,
  requireStrapiUrl,
  rewriteMediaUrls,
  shortContentHash,
  wipeGeneratedOutputs,
  writeJson,
} from "./cms-lib.mjs";
import {
  DISCOVERY_KEYS,
  STATIC_KEYS,
  expandDynamicKeys,
} from "./cms-manifest-medrent.mjs";
import { SITE } from "./cms-site.mjs";

const root = process.cwd();

async function fetchRemote(path, env) {
  const key = normalizeRequestKey(path);
  const base = normalizeStrapiApiBase(env.STRAPI_URL);
  const url = new URL(key.replace(/^\//, ""), `${base}/`).toString();
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Strapi error ${res.status} for ${key}: ${await res.text()}`);
  }
  return res.json();
}

async function downloadMedia(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Media fetch failed ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return buf;
}

async function buildSnapshot(env) {
  await wipeGeneratedOutputs(root);
  const strapiUrl = requireStrapiUrl(env);
  const origin = strapiUrl.origin;
  const hostname = configuredStrapiHostname(env);
  const requests = {};
  const mediaHashes = {};

  async function stateFingerprint() {
    const chunks = [];
    for (const key of Object.keys(requests).sort()) {
      chunks.push(JSON.stringify(requests[key]));
    }
    for (const url of [...collectMediaUrls(requests, hostname, origin)].sort()) {
      if (!mediaHashes[url]) {
        mediaHashes[url] = shortContentHash(await downloadMedia(url));
      }
      chunks.push(`${url}:${mediaHashes[url]}`);
    }
    return shortContentHash(Buffer.from(chunks.join("\n"), "utf8"), 32);
  }

  const allKeys = [...STATIC_KEYS, ...DISCOVERY_KEYS];
  for (const key of allKeys) {
    requests[normalizeRequestKey(key)] = await fetchRemote(key, env);
  }
  for (const key of expandDynamicKeys(requests)) {
    const normalized = normalizeRequestKey(key);
    if (!requests[normalized]) {
      requests[normalized] = await fetchRemote(normalized, env);
    }
  }

  const fingerprintA = await stateFingerprint();

  for (const key of expandDynamicKeys(requests)) {
    const normalized = normalizeRequestKey(key);
    if (!requests[normalized]) {
      requests[normalized] = await fetchRemote(normalized, env);
    }
  }

  const fingerprintB = await stateFingerprint();
  if (fingerprintA !== fingerprintB) {
    throw new Error("CMS_CHANGED_DURING_SNAPSHOT");
  }

  const urlToLocal = new Map();
  let assetBytes = 0;
  const assetByHash = new Map();

  for (const url of collectMediaUrls(requests, hostname, origin)) {
    const bytes = await downloadMedia(url);
    const hash = shortContentHash(bytes);
    assetBytes += bytes.length;
    if (!assetByHash.has(hash)) {
      const ext = new URL(url).pathname.match(/\.[a-z0-9]+$/i)?.[0] ?? ".bin";
      const localPath = `/cms-assets/${hash}${ext}`;
      assetByHash.set(hash, localPath);
      await writeFile(join(root, "public", localPath.replace(/^\//, "")), bytes);
    }
    urlToLocal.set(url, assetByHash.get(hash));
  }

  const rewritten = {};
  for (const [key, body] of Object.entries(requests)) {
    rewritten[key] = rewriteMediaUrls(body, urlToLocal, hostname, origin);
  }

  let gitSha = null;
  try {
    gitSha = execSync("git rev-parse HEAD", { cwd: root }).toString().trim();
  } catch {
    gitSha = null;
  }

  const snapshot = {
    site: SITE,
    generatedAt: new Date().toISOString(),
    cmsFingerprint: fingerprintB,
    requestCount: Object.keys(rewritten).length,
    assetCount: assetByHash.size,
    assetBytes,
    gitSha,
    mode: "snapshot",
    requests: rewritten,
  };

  await writeJson(join(root, "src/generated/cms-snapshot.json"), snapshot);
  await writeJson(join(root, "release-manifest.json"), snapshot);
}

async function main() {
  const mode = requireCmsReleaseMode();
  if (mode === "live") {
    requireStrapiUrl(process.env);
    if (!process.env.STRAPI_API_TOKEN) {
      throw new Error("Missing STRAPI_API_TOKEN");
    }
    await writeJson(join(root, "src/generated/cms-snapshot.json"), { requests: {} });
    return;
  }
  if (!process.env.STRAPI_API_TOKEN) {
    throw new Error("Missing STRAPI_API_TOKEN");
  }
  await buildSnapshot(process.env);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
