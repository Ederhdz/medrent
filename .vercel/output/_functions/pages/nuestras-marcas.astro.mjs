import { f as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_C7LFaYYO.mjs';
import 'piccolore';
import { $ as $$Layout, B as BRANDS } from '../chunks/Layout_QnObkIlT.mjs';
import { $ as $$BreadcrumbSchema } from '../chunks/BreadcrumbSchema_D01atMfl.mjs';
export { renderers } from '../renderers.mjs';

const $$NuestrasMarcas = createComponent(($$result, $$props, $$slots) => {
  const brands = BRANDS;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Med Rent - Nuestras marcas" }, { "default": ($$result2) => renderTemplate`  ${brands.map((brand) => renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-4 py-16 space-y-12">  <div${addAttribute([brand.bgColor, "min-h-[424px] rounded-2xl p-8 flex flex-col justify-center items-center"], "class:list")}> <img${addAttribute(`/temp/marcas/${brand.logo}`, "src")} class="w-full max-w-[500px] h-auto"${addAttribute(brand.name, "alt")}> </div>  <div class="space-y-4"> <h3${addAttribute([brand.textColor, "text-xs font-semibold uppercase"], "class:list")}>${brand.name}</h3> <h2 class="text-2xl md:text-[28px] text-[#212121] font-bold"> ${brand.title} </h2> <p class="text-[14px] md:text-[16px] font-normal text-[#212121]">${unescapeHTML(brand.description)}</p>  </div>  ${brand.categories && brand.categories.length > 0 && renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-[16px] text-[#5A3A36]"> ${brand.categories.map((category) => renderTemplate`<div class="w-full"> <h4 class="font-bold text-[#212121]">${category.title}</h4> <p>${category.description}</p> </div>`)} </div>`} </section>`)}`, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Inicio", url: "https://www.medrent.mx" },
    { name: "Nuestras marcas", url: "https://www.medrent.mx/nuestras-marcas" }
  ] })} ` })}` })}`;
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/nuestras-marcas.astro", void 0);

const $$file = "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/nuestras-marcas.astro";
const $$url = "/nuestras-marcas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$NuestrasMarcas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
