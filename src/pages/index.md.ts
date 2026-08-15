import type { APIRoute } from "astro";
import { markdownResponse } from "@lib/llms";

export const prerender = true;

export const GET: APIRoute = async () => {
  return markdownResponse(`# MedRent

MedRent distribuye tecnología médica de alta especialidad en México para profesionales e instituciones de salud. El sitio cubre catálogo de productos, especialidades clínicas, marcas, blog y contacto para agendar una demo.

- Catálogo: [productos](/productos.md)
- Especialidades: [especialidades](/especialidades.md)
- Marcas: [nuestras-marcas](/nuestras-marcas.md)
- Blog: [blog](/blog.md)
- Contacto: [contacto](/contacto.md)

No sustituye juicio clínico. No inventar precios, existencias ni homologaciones no publicadas.
`);
};
