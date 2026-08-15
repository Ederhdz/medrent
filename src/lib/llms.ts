export const CANONICAL_ORIGIN = "https://www.medrent.mx";

export function markdownResponse(body: string): Response {
  return new Response(body.trim() + "\n", {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
