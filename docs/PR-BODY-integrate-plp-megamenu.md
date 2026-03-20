# PR: Integración PLP + megamenú + blog + newsletter + build (desde `main`)

> Pegar en GitHub/GitLab al abrir el PR desde la rama `feature/integrate-plp-megamenu` (o equivalente). Ajustar el título: `feat: integración PLP, megamenú, blog, newsletter y tooling`.

## Resumen

Integración de trabajo previo en listados de productos (PLP), navegación con megamenú, mejoras de blog (hero, filtros, orden), newsletter modular, breadcrumbs unificados, SEO/schemas, cliente Strapi, optimización de build y limpieza de archivos muertos. Documentación de ingeniería en `docs/`.

**Base sugerida:** `main`  
**Rama:** `feature/integrate-plp-megamenu`

---

## 1. PLP y productos

- Normalización de listados (`PLPLayout`, `PLPProductsSection`, `SidebarFilters`, `ProductCard`).
- Filtros y UX alineados entre rutas de productos.
- Texto SEO PLP (`PLPSeoText`) donde aplique.

## 2. Navbar y megamenú

- `Navbar.astro` / interacción megamenú y overlay (`Upperbar` coherente).
- Eliminado **`NavbarOriginal.astro`** (duplicado legacy sin referencias).

## 3. Blog

- Hero: alineación izquierda, tipografía y uso de espacio.
- Filtros por categoría: chips con scroll horizontal en móvil (`.blog-chips-scroll`), panel “Más filtros”, accesibilidad (regiones, `sr-only`, listas).
- Orden / chips / modo cliente vs SSR (`restoreSsrLayout`, datos en `#blog-articles-data`).
- Tarjetas y sliders de artículos (`articleCard`, `slideArticles`).
- Clasificación Strapi: `src/lib/blog/classification.ts` y uso en `blog/index.astro`.

## 4. Newsletter (módulo atómico)

- `FormNewsletter.astro` compone átomos/moléculas en `src/components/newsletter/`.
- Estilos centralizados: `src/styles/newsletter-module.css` importado desde `global.css`.
- Tipografía alineada al sistema (Lato, `var(--type-h3)`).

## 5. Breadcrumb

- `Breadcrumb.astro`: tamaño 12px, padding y layout unificados (blog y resto del sitio).

## 6. Layout, SEO y rendimiento

- `Layout.astro`: meta, OG, GTM, preload fuentes, Glide CSS async.
- Schemas (`OrganizationSchema`, `WebSiteSchema`, `BreadcrumbSchema`).
- `docs/performance-roadmap.md` (roadmap de performance).
- `initLenis.ts` y documentación asociada.

## 7. Páginas tocadas (muestra)

- Home, acerca, contacto, financiamiento, eventos, especialidades (índice y dinámicas), marcas, productos (índice y PDP), blog (índice, artículo, autor), legales, API Strapi proxy.

## 8. Servidor y Strapi

- `strapiClient.ts` y endpoints en `src/server/api/*` según integración.
- `vercel.json` si aplica headers/redirecciones.

## 9. Build y configuración

- `astro.config.mjs`: `compressHTML`, `build.inlineStylesheets`, `vite.build.minify` / `cssMinify` / `target`.
- `package.json` / lockfile alineados a Astro 5 / Node 20.

## 10. Estilos globales

- `global.css`: tokens, utilidades (p. ej. `.blog-chips-scroll`, tipografía MedRent).

## 11. Documentación en repo

- `docs/ENGINEERING.md` — guía de ingeniería (réplica de reglas Cursor).
- `docs/TESTING.md` — estado de tests (sin automatizados aún).
- Este archivo: cuerpo del PR por áreas.

> **Nota:** Reglas detalladas en `.cursor/rules/medrent-*.mdc` no se versionan si `.cursor/` sigue ignorado; usar `docs/ENGINEERING.md` como referencia en PR.

## 12. Limpieza (este commit)

- Eliminados archivos **AppleDouble** (`._*`), log de debug en `.cursor/`, **`NavbarOriginal.astro`** sin uso.
- `.gitignore`: patrón `*.log` para evitar logs accidentales en el repo.

## 13. Tests y verificación manual

- [ ] `npm run build` sin errores.
- [ ] Revisar home, `/blog`, una PLP y PDP en `preview`.
- [ ] (Opcional) Lighthouse móvil en staging tras deploy.

## 14. Riesgos / seguimiento

- Errores Strapi en build (p. ej. populate `articleClassification`) pueden requerir ajuste de API en otro PR.
- Refactor global y documentación exhaustiva quedan para fase final del proyecto según planificación.

---

### Cómo dividir en varios PRs (recomendado para escalar)

Guía completa: **[PR-METHODOLOGY.md](./PR-METHODOLOGY.md)**. Cuerpos listos (8 PRs ordenados, con rutas de archivo): **[pr/README.md](./pr/README.md)**.

Resumen del orden: docs/limpieza → build/deps → Strapi/API → PLP → navegación/CTAs → blog → newsletter/formularios → layout + SEO + `global.css` + carcasa.
