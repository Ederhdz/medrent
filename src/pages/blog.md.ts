import type { APIRoute } from "astro";
import { markdownResponse } from "@lib/llms";

export const prerender = true;

export const GET: APIRoute = async () => {
  return markdownResponse(`# Blog MedRent

Artículos y educación clínica sobre tecnología médica, neurodiagnóstico e innovación para especialistas.

HTML: https://www.medrent.mx/blog
`);
};
