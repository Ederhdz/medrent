export function toSameOriginMediaUrl(imageUrl) {
  if (!imageUrl || typeof imageUrl !== "string") return imageUrl;
  if (imageUrl.startsWith("/") && !imageUrl.startsWith("//")) return imageUrl;
  if (imageUrl.startsWith("/api/media-proxy") || imageUrl.startsWith("/cms-assets/")) {
    return imageUrl;
  }
  return imageUrl;
}

export function buildImageUrl(imageUrl, fallback = "/images/doctora.webp", options = {}) {
  if (!imageUrl) return fallback;
  return toSameOriginMediaUrl(imageUrl);
}

export function proxyMediaInData(value) {
  if (typeof value === "string") return toSameOriginMediaUrl(value);
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

export function formatSlugAsTitle(slug) {
  if (!slug || typeof slug !== "string") return "";
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
