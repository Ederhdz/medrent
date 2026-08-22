import { requireStrapiUrl } from "./config";

const STRAPIAPP_HOST_RE = /(?:^|\.)(?:media\.)?strapiapp\.com$/i;
const MEDIA_EXT_RE = /\.(avif|webp|jpe?g|png|gif|svg|ico|bmp|tiff?)(?:$|\?)/i;

function strapiOrigin(): string {
  return requireStrapiUrl().replace(/\/api\/?$/, "");
}

function strapiHostname(): string {
  return new URL(requireStrapiUrl()).hostname;
}

function isLocalMedia(value: string): boolean {
  return value.startsWith("/cms-assets/") || value.startsWith("/api/media-proxy?u=");
}

export function isStrapiMediaUrl(value: string): boolean {
  if (!value || isLocalMedia(value)) return false;
  const trimmed = value.trim();
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
      if (host === strapiHostname()) {
        return MEDIA_EXT_RE.test(absolute) || absolute.includes("/uploads/");
      }
      return false;
    }
    return trimmed.startsWith("/uploads/");
  } catch {
    return false;
  }
}

export function absolutizeMediaUrl(value: string): string {
  const trimmed = value.trim();
  if (trimmed.startsWith("//")) return `https:${trimmed}`;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  const origin = strapiOrigin().replace(/\/+$/, "");
  return `${origin}${trimmed.startsWith("/") ? "" : "/"}${trimmed}`;
}

export function toLiveProxyUrl(absoluteUrl: string): string {
  return `/api/media-proxy?u=${encodeURIComponent(absoluteUrl)}`;
}

export function rewriteLiveMedia(value: unknown): unknown {
  if (typeof value === "string") {
    if (!isStrapiMediaUrl(value)) return value;
    return toLiveProxyUrl(absolutizeMediaUrl(value));
  }
  if (Array.isArray(value)) {
    return value.map((item) => rewriteLiveMedia(item));
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      out[key] = rewriteLiveMedia(item);
    }
    return out;
  }
  return value;
}

/** Guard/fallback only. Snapshot JSON should already contain localized URLs. */
export function cmsMedia(value: unknown): unknown {
  if (typeof value === "string") {
    if (isLocalMedia(value) || !isStrapiMediaUrl(value)) return value;
    return toLiveProxyUrl(absolutizeMediaUrl(value));
  }
  return rewriteLiveMedia(value);
}
