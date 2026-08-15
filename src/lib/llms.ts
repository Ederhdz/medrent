export const CANONICAL_ORIGIN = "https://www.medrent.mx";

export const MARKDOWN_TWINS: Record<string, string> = {
  "/": "/index.md",
  "/productos": "/productos.md",
  "/especialidades": "/especialidades.md",
  "/nuestras-marcas": "/nuestras-marcas.md",
  "/blog": "/blog.md",
  "/contacto": "/contacto.md",
};

export function markdownResponse(body: string): Response {
  return new Response(body.trim() + "\n", {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export function markdownTwinForPath(pathname: string): string | undefined {
  return MARKDOWN_TWINS[pathname];
}
