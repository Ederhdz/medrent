# Diseño handover vs cableado real (Med / Itz / Latt)

**Fecha:** 2026-08-14  
**Fuente diseño:** Design Handover | Med, Itz, Latt (PDF)  
**Fuente evidencia Medrent:** [cms-staging-prod-leak-runbook.md](./cms-staging-prod-leak-runbook.md)  
**Alcance:** documentación operativa de dashboard. Sin deploy, sin cambios de código Wave 1.

---

## 1. Qué dice el diseño (correcto)

```text
CMS (Strapi) → Staging (revisión) → Deploy Vercel (Super Admin) → Producción
```

- Publish en Strapi **no** debe = sitio público.
- Staging es la vitrina de ensayo.
- Solo Super Admin libera Prod con deploy Vercel (`Create Deployment` desde `main`).
- El mismo flujo aplica a **Medrent, Itzel y Lattitude** (proyectos distintos, mismo patrón).

---

## 2. Qué hay cableado hoy (realidad)

Para que el diseño funcione hacen falta **dos pares**:

| Par | Hoy (Medrent) |
|---|---|
| Front Staging + Front Prod | Sí: `staging.medrent.mx` y `medrent.mx` |
| **CMS Staging + CMS Prod** (hosts distintos) | **No:** ambos fronts leen `balanced-amusement-bd4a404315.strapiapp.com` |

Analogía: dos vitrinas, **un solo almacén**. Publish llena el almacén que Prod también usa.

```text
Diseño:  Editor → CMS Staging → Front Staging → Transfer → CMS Prod → Deploy → Front Prod
Real:    Editor → CMS único ─┬→ webhook → Front Staging
                             └→ mismo STRAPI_URL → Front Prod (bake o runtime)
```

| Efecto | ¿Por qué? |
|---|---|
| Publish → Staging se actualiza ~5s | Webhook → Deploy Hook staging (OK) |
| Publish “se filtra” a Prod sin querer | Mismo `STRAPI_URL` en Prod |
| Deploy Vercel Prod no “aprueba” contenido Staging | Solo re-hornea el CMS que ya tiene en env |

**Wave 1 (rama):** cierra el proxy `/api/strapi` (404). Eso tapa el atajo HTTP; **no** crea dos CMS. En `www` aplica solo tras merge de Eder.

**Itzel / Lattitude:** misma arquitectura. Validar en dashboard si Staging y Prod tienen `STRAPI_URL` distinto; si no, mismo leak.

---

## 3. Checklist Medrent (dashboard)

Cuenta: `designteammedrent` · Proyectos: `medrent.mx` (`prj_RtTCvX9aSN8BC1hyOfOtImbaBdC6`), `staging.medrent.mx` (`prj_a0EH0MQD3a3iuAVdyi9aFI8gvnjP`).

### A. Strapi Cloud

- [ ] Existen Environments **Staging** y **Production** (dos URLs admin/API).
- [ ] Anotar hostname Staging: `________________.strapiapp.com`
- [ ] Anotar hostname Production: `________________.strapiapp.com` (**≠** Staging)
- [ ] Editores cotidianos **solo** en Staging; Prod CMS = lectura + Transfer, no edición diaria.

### B. Vercel env

- [ ] Proyecto **staging.medrent.mx** → `STRAPI_URL` + `STRAPI_API_TOKEN` = host **Staging**
- [ ] Proyecto **medrent.mx** (Production **y** Preview del prod) → `STRAPI_URL` + token = host **Production**
- [ ] Comparar solo hostname: Staging ≠ Production

### C. Webhooks

- [ ] Webhook solo en CMS Staging → Deploy Hook `medrent-staging` (`…/prj_a0EH0MQD3a3iuAVdyi9aFI8gvnjP/iPh6I2IDHE`)
- [ ] Preferir `entry.publish` (no rebuild en cada Save si aplica)
- [ ] **Cero** webhooks hacia Deploy Hook de `medrent.mx` productivo

### D. Promote a Prod (flujo del PDF)

- [ ] Validar en Front Staging
- [ ] Transfer Strapi Staging → Production (manual), **o** Promote de deployment staging ya horneado (sin re-leer CMS)
- [ ] Luego Deploy Vercel en proyecto `medrent.mx` / rama `main` (Super Admin / Eder)
- [ ] Validar `www.medrent.mx`

### E. Prueba ácida (antes de dar por cerrado)

1. Publish de prueba **solo** en CMS Staging (campo inocuo / draft controlado).
2. Esperar rebuild Staging (~5–10s).
3. Confirmar: Front Staging muestra el cambio.
4. Confirmar: `www.medrent.mx` **no** cambia (HTML / datos) hasta Transfer + deploy Prod.
5. Tras Wave 1 en prod: `GET https://www.medrent.mx/api/strapi/site-setting` → 404 (o CMS Prod aislado, nunca Staging live).

```bash
# Hosts deben diferir cuando el cableado esté bien
# (sustituir por lecturas de env / Strapi admin; no pegar tokens)
echo "Staging STRAPI host: ..."
echo "Prod STRAPI host: ..."
```

---

## 4. Checklist Itzel (mismo patrón)

Rellenar cuando haya acceso a Vercel/Strapi del sitio.

| Campo | Valor |
|---|---|
| Vercel team / Staging project | |
| Vercel Production project | |
| Front Staging URL | |
| Front Prod URL | |
| Strapi Staging host | |
| Strapi Production host | |
| Deploy Hook Staging (ID/nombre) | |

- [ ] `STRAPI_URL` Staging ≠ Production (hostname)
- [ ] Webhook solo Staging → front Staging
- [ ] Cero hooks a Prod
- [ ] Editores solo en CMS Staging
- [ ] Promote = Transfer (o Promote deployment) + Deploy Vercel Prod
- [ ] Prueba ácida: Publish Staging no mueve `www` hasta promote

---

## 5. Checklist Lattitude (mismo patrón)

Referencia PDF: CMS admin `inspiring-delight-e03825eb6a.strapiapp.com` · Front Staging `staging.lattitude.mx` · Prod `www.lattitude.mx` · Vercel `designteamlattitudes-projects`.

| Campo | Valor |
|---|---|
| Vercel Staging project | |
| Vercel Production project | |
| Strapi Staging host | |
| Strapi Production host | |
| Deploy Hook Staging | |

- [ ] `STRAPI_URL` Staging ≠ Production (hostname)
- [ ] Webhook solo Staging → front Staging
- [ ] Cero hooks a Prod
- [ ] Editores solo en CMS Staging
- [ ] Promote = Transfer (o Promote deployment) + Deploy Vercel Prod
- [ ] Prueba ácida: Publish Staging no mueve `www.lattitude.mx` hasta promote

---

## 6. Relación con otros trabajos

| Trabajo | Quién | Relación |
|---|---|---|
| Wave 1 SEO/a11y (proxy 404, etc.) | Eder abre PR Vireon | Cierra leak HTTP; **no** separa CMS |
| Este cableado Staging/Prod | Dashboard `designteam*` | Hace real el flujo del PDF |
| Twins `.md` / Navbar | Olas posteriores | Fuera de alcance |

Detalle técnico Medrent: [cms-staging-prod-leak-runbook.md](./cms-staging-prod-leak-runbook.md).
