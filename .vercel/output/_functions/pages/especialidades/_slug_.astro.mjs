import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_C7LFaYYO.mjs';
import 'piccolore';
import { $ as $$Layout, E as ESPECIALTIES } from '../../chunks/Layout_QnObkIlT.mjs';
import { $ as $$BreadcrumbSchema } from '../../chunks/BreadcrumbSchema_D01atMfl.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_D_tLf-Do.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://medrent.mx");
async function getStaticPaths() {
  return ESPECIALTIES.map((especialidad) => ({
    params: { slug: especialidad.Slug },
    props: { especialidad }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { especialidad } = Astro2.props;
  const canonical = `https://www.medrent.mx/especialidades/${especialidad.Slug}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": especialidad.Nombre }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="w-full max-w-7xl mx-auto flex flex-col "> <!-- Hero Section de la Categoría --> <section class="relative w-full h-auto rounded-b-[24px] md:rounded-none relative"> <!-- Breadcrumb sobre la imagen --> <div class="absolute w-full z-2"> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "textColor": "text-white", "items": [
    { name: "INICIO", href: "/" },
    { name: "ESPECIALIDADES", href: "/especialidades" },
    { name: especialidad.Nombre }
  ] })} </div> <!-- Fila 1 --> <div class="flex flex-col w-full h-auto rounded-b-[24px] md:rounded-none lg:flex-row mb-8"> <!-- Columna 1.2: Imagen (actual izquierda) --> <div class="w-full h-[262px] min-h-[400px] relative overflow-hidden bg-cover bg-center md:rounded-none lg:rounded-bl-[24px]"${addAttribute(`background-image: url(/temp/especialidades/${especialidad.Path}/hero.png`, "style")}></div> <!-- Columna 1.1: Texto (actual derecha) --> <div class="w-full h-auto flex flex-col justify-center gap-2 z-10 bg-[var(--color-primary)] p-4 sm:p-6 md:p-8 rounded-b-[24px] md:rounded-b-[0_0_24px_24px] lg:rounded-b-none lg:rounded-br-[24px]"> <h1 class="font-bold font-kallisto text-[28px] md:text-[36px] font-light text-white text-left w-full"> ${(especialidad?.Nombre || "categoria").toUpperCase()} </h1> ${especialidad?.Descripcion ? renderTemplate`<p class="text-[16px] md:text-[16px] text-left text-white">${especialidad.Descripcion}</p>` : null} <!-- Botones de navegación --> ${(() => {
    const items = Array.isArray(ESPECIALTIES) ? ESPECIALTIES : [];
    const currentIdx = items.findIndex((item) => item.Path === especialidad.Path);
    const prevIdx = currentIdx === 0 ? items.length - 1 : currentIdx - 1;
    const nextIdx = currentIdx === items.length - 1 ? 0 : currentIdx + 1;
    const prevItem = items[prevIdx];
    const nextItem = items[nextIdx];
    return renderTemplate`<div class="flex items-center space-x-4 w-full justify-between sm:justify-start pt-4 md:py-4">  <a${addAttribute(prevItem ? `/especialidades/${prevItem.Path}` : "#", "href")} class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80 p-2" style="background: rgba(255, 255, 255, 0.20);"> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </a>  <a${addAttribute(nextItem ? `/especialidades/${nextItem.Path}` : "#", "href")} class="flex items-center space-x-3 rounded-full cursor-pointer transition-opacity hover:opacity-80 pl-4 py-2 pr-2" style="background: rgba(255, 255, 255, 0.20);"> <span class="text-white text-sm font-medium font-kallisto">Siguiente especialidad</span> <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center"> <svg class="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </a> </div>`;
  })()} </div> </div> ${especialidad?.CatalogoAplicaciones && especialidad.CatalogoAplicaciones.filter((aplicacion) => aplicacion.Slug).length > 0 && renderTemplate`<section class="mb-16 bg-[#F5FAF9]"> <div class="space-y-[25px]"> ${especialidad.CatalogoAplicaciones.filter((aplicacion) => aplicacion.Slug).map((aplicacion, index) => renderTemplate`<div> <div${addAttribute(`flex flex-row-reverse sm:flex-row md:flex-row w-full rounded-lg gap-4 p-4 md:gap-6 md:p-6 lg:gap-6 lg:py-6 lg:px-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`, "class")}>  <div class="w-full md:w-1/2 flex flex-col justify-between md:px-6"> <div> <p class="font-kallisto text-[14px] font-medium text-[var(--color-primary)]">APLICACIÓN</p> <h3 class="font-kallisto text-[24px] sm:text-[28px] font-light text-[#261819]"> ${aplicacion.AplicacionClinica} </h3> ${aplicacion.Descripcion && renderTemplate`<p class="text-[var(--color-text-default)] text-[16px] mb-6 leading-relaxed"> ${aplicacion.Descripcion} </p>`}  </div>  </div>  <div class="w-auto md:w-1/2 relative overflow-hidden sm:rounded-2xl flex items-start md:items-center justify-center">   <img${addAttribute(`/temp/especialidades/${especialidad.Slug}/${aplicacion.image}`, "src")}${addAttribute(aplicacion.AplicacionClinica, "alt")} class="object-cover block sm:hidden rounded-[8px]" style="width:118px;height:83px;">    <img${addAttribute(`/temp/especialidades/${especialidad.Slug}/${aplicacion.image}`, "src")}${addAttribute(aplicacion.AplicacionClinica, "alt")} class="object-cover hidden sm:block w-full h-full">  </div> </div>   </div>`)} </div> </section>`} </section> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "slot": "head", "items": [
    { name: "Inicio", url: "https://www.medrent.mx" },
    { name: "Especialidades", url: "https://www.medrent.mx/especialidades" },
    { name: especialidad.Nombre, url: canonical }
  ] })}` })}`;
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/especialidades/[slug].astro", void 0);

const $$file = "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/especialidades/[slug].astro";
const $$url = "/especialidades/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
