import { e as createAstro, f as createComponent, r as renderTemplate } from './astro/server_C7LFaYYO.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://medrent.mx");
const $$BreadcrumbSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreadcrumbSchema;
  const { items } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n{JSON.stringify({\n  "@context": "https://schema.org",\n  "@type": "BreadcrumbList",\n  "itemListElement": items.map((item, index) => ({\n    "@type": "ListItem",\n    "position": index + 1,\n    "name": item.name,\n    "item": item.url\n  }))\n})}\n<\/script>'])));
}, "/Users/Eder/Documents/GitHub/medrent.mx/src/components/seo/BreadcrumbSchema.astro", void 0);

export { $$BreadcrumbSchema as $ };
