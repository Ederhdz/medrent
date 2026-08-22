/**
 * WCAG relative-luminance helpers for readable text on brand / interstitial colors.
 */

function channelToLinear(channel: number): number {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function parseHexColor(hex: string): { r: number; g: number; b: number } | null {
  const raw = hex.trim().replace(/^#/, "");
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(raw)) return null;

  const full =
    raw.length === 3
      ? raw
          .split("")
          .map((ch) => ch + ch)
          .join("")
      : raw;

  return {
    r: Number.parseInt(full.slice(0, 2), 16),
    g: Number.parseInt(full.slice(2, 4), 16),
    b: Number.parseInt(full.slice(4, 6), 16),
  };
}

function relativeLuminance(hex: string): number | null {
  const rgb = parseHexColor(hex);
  if (!rgb) return null;
  return (
    0.2126 * channelToLinear(rgb.r) +
    0.7152 * channelToLinear(rgb.g) +
    0.0722 * channelToLinear(rgb.b)
  );
}

function contrastRatio(fgLum: number, bgLum: number): number {
  const lighter = Math.max(fgLum, bgLum);
  const darker = Math.min(fgLum, bgLum);
  return (lighter + 0.05) / (darker + 0.05);
}

export type AccessibleTextOnBackground = {
  /** Tailwind text class for Body / Breadcrumb */
  textClass: string;
  /** Hex for SVG fills (Breadcrumb chevrons) */
  fillHex: string;
  /** Prefer dark text when background is light */
  isDarkText: boolean;
};

const WHITE_LUM = 1;
const DARK_TEXT = "#171D1C";
/**
 * Explicit hex ink for light bands.
 * Avoid `text-dark` / `--color-text-dark` (near-white in this design system).
 * Prefer hex over token classes so Tailwind JIT always emits a real color.
 */
const DARK_TEXT_CLASS = "text-[#171D1C]";
const WHITE_TEXT_CLASS = "text-white";

/**
 * Pick white vs near-black text so normal body copy meets WCAG AA (4.5:1)
 * against a solid brand / interstitial background.
 */
export function getAccessibleTextOnBackground(
  backgroundHex: string | null | undefined,
): AccessibleTextOnBackground {
  const bgLum = backgroundHex ? relativeLuminance(backgroundHex) : null;

  if (bgLum === null) {
    return {
      textClass: WHITE_TEXT_CLASS,
      fillHex: "#FFFFFF",
      isDarkText: false,
    };
  }

  const whiteContrast = contrastRatio(WHITE_LUM, bgLum);
  if (whiteContrast >= 4.5) {
    return {
      textClass: WHITE_TEXT_CLASS,
      fillHex: "#FFFFFF",
      isDarkText: false,
    };
  }

  return {
    textClass: DARK_TEXT_CLASS,
    fillHex: DARK_TEXT,
    isDarkText: true,
  };
}
