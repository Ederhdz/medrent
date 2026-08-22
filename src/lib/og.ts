export const DEFAULT_OG_PATH = "/og/og-default-medrent.png";
export const DEFAULT_OG_WIDTH = 1200;
export const DEFAULT_OG_HEIGHT = 630;
export const DEFAULT_OG_ALT = "MedRent";

export function absoluteOgImage(image: string | undefined | null, siteOrigin: string): string {
  const fallback = new URL(DEFAULT_OG_PATH, siteOrigin).toString();
  if (!image || !image.trim()) return fallback;

  const trimmed = image.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  try {
    return new URL(trimmed, siteOrigin).toString();
  } catch {
    return fallback;
  }
}
