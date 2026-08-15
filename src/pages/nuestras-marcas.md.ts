import type { APIRoute } from "astro";
import { markdownResponse } from "@lib/llms";

export const prerender = true;

export const GET: APIRoute = async () => {
  return markdownResponse(`# Marcas MedRent

Partners tecnológicos representados por MedRent en México. Cada marca tiene una ficha con especialidades y productos disponibles.

HTML: https://www.medrent.mx/nuestras-marcas
`);
};
