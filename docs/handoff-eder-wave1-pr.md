# Handoff Eder — Medrent Wave 1 (INDX)

**Para:** Eder (cuenta Vireon en Vercel)  
**Repo:** `saraterankc/site-medrent.mx`  
**Rama:** `fix/audit-baseline-2026-08-14` → `main`  
**Quién NO debe abrir el PR:** `@Gio-vidaurri` (Preview falla: no es miembro Vireon; cuentas free sin team compartido)

## Qué pedir a Eder

1. Abrir **un solo PR** desde `fix/audit-baseline-2026-08-14` hacia `main` (con la cuenta GitHub ligada a Vireon / designteammedrent).
2. Esperar **Preview** verde en Vercel (no es Production).
3. Correr Lighthouse (abajo) contra la URL del Preview.
4. Solo si pasa el checklist → **merge** → Production.

El PR #1 anterior (cerrado) fue abierto desde Gio y falló el Preview por permisos. Reabrir o crear PR nuevo desde la misma rama con la cuenta Vireon.

## Commits en la rama (vs `main`)

- `f7605b0` — fix(seo): close INDX P0/P1 gaps…
- `f57df6a` — fix(seo): keep markdown twins out of wave 1
- `bdd988a` — fix(a11y): close remaining contrast and hero CLS gaps

## Fuera de este PR

- Twins `.md` (ola 2)
- Navbar / payload
- Split `STRAPI_URL` Staging vs Production (dashboard)
- woff2 / HTML-validate masivo
- Archivos locales no incluidos: `docs/cms-staging-prod-leak-runbook.md`, `scripts-local-pull-env.sh`, change de `.gitignore` (si no está en la rama)

## Checklist local ya verificado (localhost)

| Check | Resultado |
|---|---|
| `GET /api/strapi/*` | 404 |
| mailto Upperbar | `mailto:contacto@medrent.mx` |
| OG home | `/og/og-default-medrent.png` |
| Sitemap locs | ~189 (productos + blog + especialidades) |
| H1 especialidad | SSR en `/especialidades/neurofisiologia` |
| `llms.txt` | Links markdown a rutas HTML |
| GTM en DEV | Off |
| PR abiertos desde Gio | Ninguno |

## Texto sugerido para el PR (pegar en GitHub)

### Title

`fix(seo): INDX wave 1 — OG, crawl, a11y y AEO`

### Body

```markdown
## Summary
- Cierra leak proxy Strapi (`/api/strapi/*` → 404) y endurece `/api/contact`.
- OG default PNG (nunca favicon); PDP/artículos conservan portada CMS.
- Sitemap dinámico, schemas, H1 especialidades, `llms.txt` con links HTML, a11y Lighthouse, hero LCP/CLS, headers Vercel.

## Hallazgo → Archivo → Fix → Cómo verificar

| Hallazgo | Archivo | Fix | Cómo verificar |
|---|---|---|---|
| Proxy CMS abierto | `src/pages/api/strapi/[...slug].ts` | 404 | `GET /api/strapi/site-setting` → 404 |
| Contact CORS/payload | `src/pages/api/contact.js` | Origin exacto + allowlist HubSpot | Errores genéricos |
| Mailto literal | `Upperbar.astro` | Interpolación | `mailto:contacto@…` |
| Autor undefined | `src/lib/blogAuthor.ts` + blog | Fallback `team-medrent` | 0× `/blog/autor/undefined` |
| Popup kunz / IDs | `popUpSolicitarCotizacion.astro` | IDs `quote-*` | Sin `kunz-app.com` |
| OG = favicon | `src/lib/og.ts`, `Layout.astro` | Default PNG | Home = `/og/og-default-medrent.png` |
| Sitemap / robots | `sitemap-pages.xml.ts`, `robots.txt.ts` | Locs reales; sin Allow dirs 404 | Sitemap ≫ 15 |
| Schema WP / SearchAction | Organization + WebSite schemas | Logo/email/slug live; sin `/?s=` | view-source |
| Especialidad sin H1 | `especialidades/[category]/index.astro` | H1 SSR | view-source `<h1>` |
| llms.txt sin links | `llms.txt.ts` | Links HTML | `/llms.txt` con `[texto](url)` |
| button-name / contraste | Search, forms, StickyCta, eyebrows | aria-label + tokens | Lighthouse a11y |
| CLS/LCP hero | `BannerSlider.astro`, `global.css` | eager + fetchpriority; Lato truetype | Agentic CLS |
| GTM/PII/headers | `Layout.astro`, `formValidator.js`, `vercel.json` | dataLayer; GTM off DEV; nosniff/HSTS | Preview headers |

## Test plan (Preview HTTPS, incógnito)
- [ ] Accesibilidad / SEO / Best practices **100**
- [ ] Agentic **3/3**
- [ ] Home + 1 especialidad + 1 PDP + 1 artículo
- [ ] Sin merge hasta pasar checklist
```

## Lighthouse (solo Preview o prod HTTPS)

**No medir en `http://localhost`** (`is-on-https` falla; toolbar Astro / extensiones contaminan).

1. Ventana **incógnito**, sin extensiones.
2. URL del **Preview** de Vercel (no `www` hasta post-merge).
3. Páginas: `/`, una `/especialidades/...`, una `/productos/...`, un `/blog/...`.
4. Criterio: Accesibilidad 100 · SEO 100 · Best practices 100 · Agentic 3/3.
