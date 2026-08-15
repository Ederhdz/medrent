import type { APIRoute } from "astro";
import { markdownResponse } from "@lib/llms";

export const prerender = true;

export const GET: APIRoute = async () => {
  return markdownResponse(`# Productos MedRent

Catálogo de equipos médicos y consumibles para neurodiagnóstico, neuromodulación, rehabilitación y especialidades relacionadas. Navega por especialidad, marca o aplicación clínica.

HTML: https://www.medrent.mx/productos
`);
};
