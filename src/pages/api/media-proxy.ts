import type { APIRoute } from "astro";

/**
 * Same-origin image proxy for Strapi Cloud media.
 * Strips Set-Cookie so Lighthouse Best Practices is not penalized by Cloudflare __cf_bm.
 */
const ALLOWED_HOST =
  /^(?:[a-z0-9-]+\.)?(?:media\.)?strapiapp\.com$/i;

const MAX_BYTES = 15 * 1024 * 1024;

function isAllowedMediaUrl(raw: string): URL | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    if (!ALLOWED_HOST.test(url.hostname)) return null;
    return url;
  } catch {
    return null;
  }
}

export const GET: APIRoute = async ({ url }) => {
  const target = url.searchParams.get("u");
  if (!target) {
    return new Response("Missing u", { status: 400 });
  }

  const mediaUrl = isAllowedMediaUrl(target);
  if (!mediaUrl) {
    return new Response("Forbidden host", { status: 403 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(mediaUrl.toString(), {
      headers: { Accept: "image/*,*/*" },
      redirect: "follow",
    });
  } catch {
    return new Response("Upstream fetch failed", { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    return new Response("Upstream error", { status: upstream.status || 502 });
  }

  const contentLength = Number(upstream.headers.get("content-length") || 0);
  if (contentLength > MAX_BYTES) {
    return new Response("Payload too large", { status: 413 });
  }

  const headers = new Headers();
  const contentType = upstream.headers.get("content-type") || "application/octet-stream";
  headers.set("Content-Type", contentType);
  headers.set(
    "Cache-Control",
    "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
  );
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  // Never forward third-party cookies to the browser.
  headers.delete("set-cookie");

  return new Response(upstream.body, {
    status: 200,
    headers,
  });
};
