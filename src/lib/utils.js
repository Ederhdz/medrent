// Utilities para el proyecto

// Variable de entorno para Strapi URL
const STRAPI_URL =
  import.meta.env.STRAPI_URL ||
  "https://balanced-amusement-bd4a404315.strapiapp.com";

const STRAPI_MEDIA_HOST =
  /^(?:[a-z0-9-]+\.)?(?:media\.)?strapiapp\.com$/i;

/**
 * Rewrites Strapi Cloud media to a same-origin proxy so the browser never
 * receives Cloudflare third-party cookies (Lighthouse Best Practices).
 * Local/public paths and non-Strapi hosts are left untouched.
 */
export function toSameOriginMediaUrl(imageUrl) {
  if (!imageUrl || typeof imageUrl !== "string") return imageUrl;
  if (imageUrl.startsWith("/api/media-proxy")) return imageUrl;
  if (imageUrl.startsWith("/") && !imageUrl.startsWith("//")) return imageUrl;

  try {
    const absolute = imageUrl.startsWith("//")
      ? `https:${imageUrl}`
      : imageUrl.startsWith("http://") || imageUrl.startsWith("https://")
        ? imageUrl
        : `${STRAPI_URL}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
    const parsed = new URL(absolute);
    if (!STRAPI_MEDIA_HOST.test(parsed.hostname)) return absolute;
    return `/api/media-proxy?u=${encodeURIComponent(parsed.toString())}`;
  } catch {
    return imageUrl;
  }
}

/**
 * Función helper para construir URLs de imágenes de Strapi
 * Maneja tanto URLs absolutas (producción) como relativas (desarrollo)
 * @param {string} imageUrl - URL de la imagen desde Strapi
 * @param {string} fallback - Imagen por defecto si no hay URL
 * @param {{ proxy?: boolean }} [options] - proxy=false for OG/meta (keep absolute CDN URL)
 * @returns {string} URL completa de la imagen
 */
export function buildImageUrl(imageUrl, fallback = "/images/doctora.webp", options = {}) {
  const { proxy = true } = options;
  if (!imageUrl) return fallback;

  let absolute;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    absolute = imageUrl;
  } else if (imageUrl.startsWith("//")) {
    absolute = `https:${imageUrl}`;
  } else {
    absolute = `${STRAPI_URL}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
  }

  return proxy ? toSameOriginMediaUrl(absolute) : absolute;
}

/**
 * Deep-rewrite Strapi media URLs inside JSON destined for the browser
 * (Alpine datasets, gallery data-* attrs). Leaves non-media strings alone.
 */
export function proxyMediaInData(value) {
  if (typeof value === "string") {
    if (
      value.includes("strapiapp.com") ||
      value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("//")
    ) {
      try {
        const absolute = value.startsWith("//") ? `https:${value}` : value;
        const host = new URL(absolute).hostname;
        if (STRAPI_MEDIA_HOST.test(host)) return toSameOriginMediaUrl(absolute);
      } catch {
        /* keep original */
      }
    }
    return value;
  }
  if (Array.isArray(value)) return value.map((item) => proxyMediaInData(item));
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, val] of Object.entries(value)) {
      out[key] = proxyMediaInData(val);
    }
    return out;
  }
  return value;
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/** Convierte un slug con guiones en título legible (mayúscula inicial por palabra). */
export function formatSlugAsTitle(slug) {
  if (!slug || typeof slug !== "string") return "";
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
