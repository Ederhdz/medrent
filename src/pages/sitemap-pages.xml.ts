import type { APIRoute } from "astro";
import { getCategories } from "@server/api/categories";
import { getProducts } from "@server/api/products";
import { getArticles } from "@server/api/articles";
import { getBrands } from "@server/api/brands";
import { SPECIALTIES, STATIC_ROUTES } from "@lib/siteMetadata";

export const prerender = true;

const BASE_URL = "https://www.medrent.mx";

const STATIC_PAGES: { path: string; priority: string }[] = [
  { path: STATIC_ROUTES.home, priority: "1.0" },
  { path: STATIC_ROUTES.specialties, priority: "0.8" },
  { path: STATIC_ROUTES.products, priority: "0.9" },
  { path: STATIC_ROUTES.blog, priority: "0.85" },
  { path: STATIC_ROUTES.contact, priority: "0.75" },
  { path: STATIC_ROUTES.events, priority: "0.7" },
  { path: STATIC_ROUTES.aboutUs, priority: "0.7" },
  { path: STATIC_ROUTES.brands, priority: "0.7" },
  { path: STATIC_ROUTES.financing, priority: "0.8" },
  { path: STATIC_ROUTES.privacy, priority: "0.3" },
  { path: STATIC_ROUTES.terms, priority: "0.3" },
];

const FALLBACK_ESPECIALIDADES: { path: string; priority: string }[] = Object.values(SPECIALTIES).map(
  (specialty) => ({ path: `/especialidades/${specialty.slug}`, priority: specialty.priority }),
);

function isUsableSlug(slug: unknown): slug is string {
  return typeof slug === "string" && slug.trim().length > 0 && slug !== "undefined" && slug !== "null";
}

function entrySlug(entry: { slug?: string; attributes?: { slug?: string } }): string | undefined {
  return entry?.slug || entry?.attributes?.slug;
}

async function getDynamicPaths(): Promise<{ path: string; priority: string }[]> {
  const [categories, products, articles, brands] = await Promise.all([
    getCategories().catch(() => []),
    getProducts().catch(() => []),
    getArticles().catch(() => []),
    getBrands().catch(() => []),
  ]);

  const especialidades: { path: string; priority: string }[] = [];
  if (Array.isArray(categories) && categories.length > 0) {
    for (const category of categories) {
      if (!isUsableSlug(category?.slug)) continue;
      especialidades.push({ path: `/especialidades/${category.slug}`, priority: "0.8" });
      const subs = Array.isArray(category.subcategories) ? category.subcategories : [];
      for (const sub of subs) {
        if (!isUsableSlug(sub?.slug)) continue;
        especialidades.push({
          path: `/especialidades/${category.slug}/${sub.slug}`,
          priority: "0.7",
        });
      }
    }
  }

  const productPaths = (Array.isArray(products) ? products : [])
    .map((product) => product?.slug)
    .filter(isUsableSlug)
    .map((slug) => ({ path: `/productos/${slug}`, priority: "0.8" }));

  const articlePaths = (Array.isArray(articles) ? articles : [])
    .map(entrySlug)
    .filter(isUsableSlug)
    .map((slug) => ({ path: `/blog/${slug}`, priority: "0.6" }));

  const brandPaths = (Array.isArray(brands) ? brands : [])
    .map((brand) => brand?.slug)
    .filter(isUsableSlug)
    .map((slug) => ({ path: `/nuestras-marcas/${slug}`, priority: "0.65" }));

  return [
    ...(especialidades.length > 0 ? especialidades : FALLBACK_ESPECIALIDADES),
    ...productPaths,
    ...articlePaths,
    ...brandPaths,
  ];
}

function mergePages(
  staticPages: { path: string; priority: string }[],
  dynamic: { path: string; priority: string }[],
): { path: string; priority: string }[] {
  const byPath = new Map<string, { path: string; priority: string }>();
  for (const page of staticPages) {
    byPath.set(page.path, page);
  }
  for (const page of dynamic) {
    byPath.set(page.path, page);
  }
  return Array.from(byPath.values()).sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.path.localeCompare(b.path);
  });
}

export const GET: APIRoute = async () => {
  const dynamic = await getDynamicPaths();
  const pages = mergePages(STATIC_PAGES, dynamic);

  const urls = pages
    .map(
      ({ path, priority }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
