import type { CmsReleaseMode } from "./types";

function readEnv(name: string): string {
  const meta = import.meta.env as Record<string, string | undefined>;
  return String(meta[name] ?? process.env[name] ?? "").trim();
}

export function getCmsReleaseMode(): CmsReleaseMode {
  const mode = readEnv("CMS_RELEASE_MODE");
  if (mode !== "live" && mode !== "snapshot") {
    throw new Error(
      "CMS_RELEASE_MODE is required and must be 'live' or 'snapshot'. Missing Vercel env is BLOCKED_CONFIG, not a silent default to live.",
    );
  }
  return mode;
}

export function isSnapshotMode(): boolean {
  return getCmsReleaseMode() === "snapshot";
}

export function isRuntimeStrapiDisabled(): boolean {
  return readEnv("CMS_RUNTIME_STRAPI_DISABLED") === "1";
}

export function requireStrapiUrl(): string {
  const raw = readEnv("STRAPI_URL");
  if (!raw) {
    throw new Error("Missing STRAPI_URL");
  }
  try {
    new URL(raw.replace(/\/+$/, ""));
  } catch {
    throw new Error(`STRAPI_URL must be an absolute URL. Received: ${raw}`);
  }
  return raw.replace(/\/+$/, "");
}

export function getStrapiApiToken(): string {
  return readEnv("STRAPI_API_TOKEN");
}

export function normalizeStrapiApiBase(rawUrl: string): string {
  const trimmed = rawUrl.replace(/\/+$/, "");
  if (!trimmed) {
    throw new Error("Missing STRAPI_URL");
  }
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
}
