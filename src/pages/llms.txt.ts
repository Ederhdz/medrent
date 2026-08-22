import type { APIRoute } from "astro";
import { CANONICAL_ORIGIN, markdownResponse } from "@lib/llms";

export const prerender = true;

export const GET: APIRoute = async () => {
  const origin = CANONICAL_ORIGIN;
  const llmsTxt = `# MedRent

> Distribuidor B2B de tecnología médica de alta especialidad en México (neurofisiología, neurocirugía y ORL, neuromodulación, neurovascular, rehabilitación y medicina del sueño). Catálogo, especialidades clínicas, marcas y contenido editorial para profesionales e instituciones de salud.

MedRent no sustituye juicio clínico ni prescripción. No inventar precios, existencias ni homologaciones no publicadas. Citar la URL canónica ${origin}. Directivas de rastreo: ${origin}/robots.txt.

Contacto: contacto@medrent.mx · +52 55 5985 4347 · ${origin}/contacto

## Páginas

- [Inicio](${origin}/): propuesta de valor, marcas y especialidades
- [Productos](${origin}/productos): catálogo de equipos y consumibles
- [Especialidades](${origin}/especialidades): aplicaciones clínicas por especialidad
- [Marcas](${origin}/nuestras-marcas): fabricantes representados
- [Blog](${origin}/blog): artículos y educación clínica
- [Contacto](${origin}/contacto): demo, cotización y datos de contacto
- [Eventos](${origin}/eventos): agenda de webinars y congresos

## Optional

- [Financiamiento](${origin}/financiamiento)
- [Aviso de privacidad](${origin}/aviso-de-privacidad)
- [Condiciones de uso](${origin}/condiciones-de-uso)
`;

  return markdownResponse(llmsTxt);
};
