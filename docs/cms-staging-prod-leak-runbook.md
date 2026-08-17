# Runbook: Leak CMS Staging → Productivo (Medrent)

**Fecha de investigación:** 2026-08-14  
**Alcance:** Medrent (evidencia en Vercel + Strapi API). Itzel y Lattitude comparten la misma arquitectura de frontend; aplica el mismo patrón hasta validar sus proyectos Vercel.

**Resumen diseño PDF vs cableado + checklists Med/Itz/Latt:** [cms-design-vs-reality-med-itz-latt.md](./cms-design-vs-reality-med-itz-latt.md)

**Restricciones respetadas:** sin Deploy Hook POST, sin `vercel --prod`, sin Strapi Transfer, sin commits a `main`.

---

## Resumen ejecutivo

El candado mental **“CMS → Staging Vercel → aprobación → Productivo” no existe como pipeline de contenido**.

Lo que sí existe:

1. **Un solo CMS vivo** (`balanced-amusement-bd4a404315.strapiapp.com`) alimenta **tanto** `www.medrent.mx` como el frontend de staging.
2. Un **webhook Strapi → Deploy Hook** (`iPh6I2IDHE`, nombre `medrent-staging`) reconstruye **solo** el proyecto Vercel `staging.medrent.mx` al publicar.
3. **Production** (`medrent.mx`) **no** se reconstruye por ese hook; su último deploy git fue **2026-06-02**. Aun así, Production puede mostrar datos CMS actuales vía rutas **runtime**.

Clasificación de causa raíz: **A + B + C** (ver abajo).

---

## Mapa de entornos (evidencia)

### Vercel (team `designteammedrents-projects`)

| Proyecto | Project ID | Dominio público | Rol |
| --- | --- | --- | --- |
| `medrent.mx` | `prj_RtTCvX9aSN8BC1hyOfOtImbaBdC6` | `www.medrent.mx`, `medrent.mx` | Productivo |
| `staging.medrent.mx` | `prj_a0EH0MQD3a3iuAVdyi9aFI8gvnjP` | `stagingmedrentmx.vercel.app` (SSO en `staging.medrent.mx`) | Staging frontend |

Ambos apuntan al mismo repo git `medrent`, branch `main`.

### Variables `STRAPI_*`

En **`medrent.mx`** (productivo):

- `STRAPI_URL` / `STRAPI_API_TOKEN` / `HUBSPOT_PAT_TK` están en **development + preview + production** con el **mismo** env id.
- Host descifrado de `STRAPI_URL`: **`balanced-amusement-bd4a404315.strapiapp.com`**.

En **`staging.medrent.mx`**:

- Las mismas keys existen (`preview` + `production` del proyecto staging) como tipo `sensitive` (no descifrables con el token actual).
- Prueba live: `/api/strapi/site-setting` y `/api/strapi/categories` en staging y en www devuelven **los mismos** `updatedAt` / `publishedAt` / payloads → **mismo CMS**.

Media en HTML de ambos sitios: solo  
`balanced-amusement-bd4a404315.media.strapiapp.com`.

### Strapi content-types (Draft & Publish)

Todos los content-types `api::*` relevantes tienen **`draftAndPublish: true`** (category, subcategory, product, brand, home-page, promo-slider, blog-article, site-setting, etc.).

Importante: el frontend Astro **no** usa `publicationState` / draft API. Filtra sobre todo con **`isActive=true`** y consume la API publicada. **Publish en Strapi = visible para cualquier build/runtime que lea ese host.**

### Deploy Hook

- Hook ID: `iPh6I2IDHE`
- Nombre meta: `medrent-staging`
- Proyecto destino: **`staging.medrent.mx` únicamente**
- En los últimos 30 deploys de staging: **30/30** con `meta.deployHookId = iPh6I2IDHE`
- En los últimos deploys de productivo: **0/21** con deploy hook (solo `source: git`)

#### Correlación CMS publish → staging rebuild (smoking gun)

| Contenido CMS | `publishedAt` | Staging deploy (hook) | Lag |
| --- | --- | --- | --- |
| `home-page` | 2026-08-12T00:39:23Z | 2026-08-12T00:39:28Z | **5s** |
| `events-page` | 2026-08-07T18:45:01Z | 2026-08-07T18:45:08Z | **7s** |
| `promo-sliders` | 2026-07-31T15:56:35Z | 2026-07-31T15:56:40Z | **5s** |
| `legal-content` | 2026-07-30T22:31:33Z | 2026-07-30T22:31:38Z | **5s** |

Conclusión: al **Publish** en el CMS que editan, Strapi dispara el webhook → Vercel rebuild de staging. **No** hay approve gate de contenido hacia productivo; el contenido ya quedó en la API compartida.

### Sobre “dos módulos Staging / Production” en Strapi Cloud

Strapi Cloud **puede** tener Environments separados. En esta investigación:

- El único host API observado en uso por **ambos** frontends Vercel es `balanced-amusement-bd4a404315`.
- Si existe un segundo environment Staging en el dashboard de Strapi, **no está cableado** a `staging.medrent.mx` ni a `medrent.mx` (o no se está usando al editar).
- Placeholders viejos en código (`e03825eb6a`, hosts de Lattitude/Itzel) **no** son el mapa fiable de entornos.

**Acción manual pendiente en Strapi Admin (Settings → Environments / Webhooks):** confirmar URL exacta del admin que usan los editores y listar webhooks (eventos `entry.publish` / `entry.update`).

---

## Clasificación de causa raíz

### A — Mismo CMS en Staging y Production (CONFIRMADO)

Preview/Production de `medrent.mx` y el proxy live de staging leen el **mismo** Strapi host. Publicar “para staging” **es** mutar la API que productivo ya consume (en build siguiente o en runtime).

### B — Webhook / transfer hacia el lado productivo (PARCIAL)

- **Confirmado:** webhook → Deploy Hook **staging** (`medrent-staging` / `iPh6I2IDHE`).
- **No confirmado** en logs: Deploy Hook hacia `medrent.mx` productivo (0 hooks en deploys prod).
- Transfer Staging→Production de Strapi Cloud: no ejercido aquí; secretos de transfer existen en la org, pero el leak observable no requiere transfer porque **ya hay un solo CMS en uso**.

### C — Runtime / media saltan el bake (CONFIRMADO)

Aunque la mayoría de páginas tienen `prerender = true`:

| Superficie | Evidencia / riesgo |
| --- | --- |
| `GET /api/strapi/[...slug]` | Responde **200** en `www.medrent.mx` con datos CMS **live** |
| Media CDN | Mismo `*.media.strapiapp.com` en prod y staging; reemplazar asset = cambio visual sin deploy |
| Navbar `globalThis` en SSR | En rutas `prerender = false` puede refetch catálogo live |
| `siteConfig.ts` | Fetch aparte; `next.revalidate` no aplica en Astro |
| `/co/` | En prod respondió **500** (MISS) al momento de la prueba — path SSR frágil |
| Fallback `utils.js` | Hardcode a host Medrent si falta env (Itzel/Lattitude copian el mismo fallback) |

Por eso usuarios ven “diversas áreas” (categorías, home, promos, legales, media): no es un bug por colección; es el **mismo pipe**.

---

## Flujo real vs esperado

```text
Esperado:
  Editor → CMS Staging → Vercel Staging → (aprobación) → Productivo

Real hoy:
  Editor → CMS único (bd4a404315)
            ├─ webhook (~5s) → rebuild staging.medrent.mx
            ├─ /api/strapi en www → lectura live inmediata
            ├─ media CDN → assets live
            └─ merge/Promote a medrent.mx → bake del CMS ya publicado
```

---

## Runbook operativo (cerrar A/B sin código)

Hacer en dashboard; **no** desde este repo:

1. **Strapi Cloud → Environments**  
   - Documentar URL Staging vs Production.  
   - Editores deben trabajar **solo** en Staging.  
   - Production Strapi: lectura + promote controlado (Transfer manual), no edición cotidiana.

2. **Vercel env**  
   - `staging.medrent.mx` → `STRAPI_URL` = host **Staging** Strapi.  
   - `medrent.mx` (Production **y** Preview del proyecto prod) → `STRAPI_URL` = host **Production** Strapi.  
   - Hoy Preview y Production de `medrent.mx` comparten el mismo valor: hay que **separarlos**.

3. **Webhooks Strapi**  
   - Mantener webhook solo en entorno Staging → Deploy Hook `medrent-staging` (`…/prj_a0EH0MQD3a3iuAVdyi9aFI8gvnjP/iPh6I2IDHE`).  
   - Preferir eventos `entry.publish` (no `entry.update` si Save no debe rebuild).  
   - Verificar que **no** exista webhook hacia Deploy Hook de `medrent.mx` productivo.

4. **Promote a productivo**  
   - Opción segura: **Promote** del deployment de staging ya horneado (copia artefactos; no re-lee CMS), **o**  
   - Transfer Strapi Staging→Production **manual** + rebuild/Promote aprobado.  
   - No usar Publish en CMS Production como atajo.

5. **Rotación de secretos**  
   - Rotar `APP_KEY` / JWT / transfer secrets expuestos en chat.  
   - No commitear tokens; no reutilizar Deploy Hook URLs en docs públicos.

---

## Endurecimiento por código (PR Medrent, luego clonar a Itzel/Lattitude)

Prioridad sugerida (PRs pequeños, un tema por PR):

1. **Cerrar o proteger** [`src/pages/api/strapi/[...slug].ts`](../src/pages/api/strapi/[...slug].ts) en Production (404, auth, o solo `VERCEL_ENV !== 'production'`).
2. Unificar `siteConfig` al `strapiClient` (eliminar `next.revalidate` muerto).
3. Auditar `/co/*` SSR (hoy 500 en prod) y Navbar fetch en SSR.
4. Quitar fallbacks hardcoded al host Medrent en Itzel/Lattitude `utils.js`.
5. Actualizar README: documentar que **CMS env ≠ Vercel env** y el flujo approve real.

Itzel / Lattitude: mismo cliente Strapi sin branch por entorno; validar sus project IDs Vercel cuando haya acceso (esta cuenta solo ve proyectos Medrent).

---

## Checklist de verificación post-fix

- [ ] `STRAPI_URL` host Staging ≠ host Production (comparar solo hostname).
- [ ] Publish en Strapi Staging rebuilda solo staging; **www no cambia** HTML ni proxy hasta promote.
- [ ] `GET https://www.medrent.mx/api/strapi/site-setting` no expone CMS (404/401) o apunta a CMS Production aislado.
- [ ] Deploy history de `medrent.mx`: sin `deployHookId` tras publishes de prueba en Staging.
- [ ] Lag publish→staging deploy sigue ~5–10s; publish→prod deploy = 0.

---

## Evidencia rápida reproducible (solo lectura)

```bash
# Mismo CMS vía proxy (staging vs prod)
curl -s 'https://www.medrent.mx/api/strapi/site-setting' | jq '.data.updatedAt'
curl -s 'https://stagingmedrentmx.vercel.app/api/strapi/site-setting' | jq '.data.updatedAt'
# Deben diferir SOLO cuando los STRAPI_URL estén separados.
```
