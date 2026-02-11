import { e as createAstro, f as createComponent, m as maybeRenderHead, k as renderComponent, l as Fragment, r as renderTemplate, h as addAttribute } from './astro/server_C7LFaYYO.mjs';
import 'piccolore';

const $$Astro = createAstro("https://medrent.mx");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items, textColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="max-w-7xl mx-auto px-8 py-2" aria-label="Breadcrumb"> <ol class="flex items-center space-x-2 text-sm uppercase font-kallisto"> ${items.map((item, index) => {
    const isLast = index === items.length - 1;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li> ${isLast ? renderTemplate`<span${addAttribute(`font-semibold ${textColor || "text-black"}`, "class")}> ${item.name} </span>` : renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`opacity-70 hover:opacity-100 transition cursor-pointer ${textColor || "text-black"}`, "class")} style="cursor: pointer;"> ${item.name} </a>`} </li> ${!isLast && renderTemplate`<li${addAttribute(index === items.length - 2 ? "" : "opacity-70", "class")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M10 7L15 12L10 17L10 7Z"${addAttribute(textColor === "text-white" ? "white" : "black", "fill")}></path> </svg> </li>`}` })}`;
  })} </ol> </nav>`;
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/components/navigation/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
