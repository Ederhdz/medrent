import type { APIRoute } from "astro";
import { getCategories } from "@server/api/categories";
import { SPECIALTIES } from "@lib/siteMetadata";
import { markdownResponse } from "@lib/llms";

export const prerender = true;

export const GET: APIRoute = async () => {
  const categories = await getCategories().catch(() => []);
  const items =
    Array.isArray(categories) && categories.length > 0
      ? categories
          .filter((category) => typeof category?.slug === "string" && category.slug)
          .map((category) => `- [${category.name}](https://www.medrent.mx/especialidades/${category.slug})`)
      : Object.values(SPECIALTIES).map(
          (specialty) => `- [${specialty.label}](https://www.medrent.mx/especialidades/${specialty.slug})`,
        );

  return markdownResponse(`# Especialidades MedRent

Aplicaciones clínicas y tecnología médica por especialidad. Cada especialidad agrupa soluciones para diagnóstico, terapia o rehabilitación.

${items.join("\n")}

HTML: https://www.medrent.mx/especialidades
`);
};
