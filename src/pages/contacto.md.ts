import type { APIRoute } from "astro";
import { markdownResponse } from "@lib/llms";

export const prerender = true;

export const GET: APIRoute = async () => {
  return markdownResponse(`# Contacto MedRent

Agenda una demo o solicita cotización con un especialista de producto.

- Email: contacto@medrent.mx
- Teléfono / WhatsApp: +52 55 5985 4347
- HTML: https://www.medrent.mx/contacto
`);
};
