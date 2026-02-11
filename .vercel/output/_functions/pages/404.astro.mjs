import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C7LFaYYO.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_QnObkIlT.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina No Encontrada - 404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col items-center justify-center text-center px-4 py-4 md:px-6 md:py-16 lg:px-8 lg:py-16 " style="background: rgb(0, 103, 100, 0.03);  background-image: url(/temp/bg-404.png);  background-size: cover; background-position: center; height: calc(100vh - 442px);"> <h1 class="font-bold text-[var(--color-text-default)] m-0 " style="font-size: 58px;">404</h1> <h4 class="text-[24px] md:text-[28px] font-bold text-[var(--color-text-default)] m-0">Esta página perdió la señal cerebral…</h4> <p class="m-0 text-lg text-gray-600 text-[16px] text-[var(--color-gray)] relative z-20">Pero tranquilo, nuestros impulsos eléctricos trabajan para reconectarla.</p> <a href="/" class="mt-6 flex px-4 py-2 justify-center items-center gap-2 rounded bg-[#261819] text-white relative z-20 bg-[var(--color-primary)]"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"></path> </svg>
Volver al inicio
</a> </section> ` })}`;
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/404.astro", void 0);

const $$file = "/Users/Eder/Documents/GitHub/medrent.mx/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
