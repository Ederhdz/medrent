# Bitácora 2026-08-22 — CMS Production isolation (Medrent)

## Cambio

`strapiClient` / `strapiFetch` removed. All CMS reads go through `cms.get()` in `src/server/cms`.

Production path is snapshot-only. Staging path stays live.

## Archivos

- Added `src/server/cms/` (`config`, `remoteSource`, `snapshotSource`, `media`, types)
- Added `scripts/prepare-cms-build.mjs`, `cms-lib.mjs`, `cms-manifest-medrent.mjs`
- Added `scripts/audit-cms-boundaries.mjs`, `audit-production-build.mjs`
- Added `scripts/test-cms-mutations.mjs`, `smoke-routes.mjs`
- Added `tests/cms/isolation.test.mjs`
- Deleted `src/server/strapiClient.ts`
- `src/lib/utils.js` no longer builds Strapi/media-proxy URLs
- `src/pages/api/media-proxy.ts` returns 404 in snapshot mode
- `src/pages/api/strapi/[...slug].ts` remains 404

## Optimizaciones

- No 1h/30min CMS TTL cache. Live fetch is `no-store` with in-flight dedupe only.
- Snapshot media is content-addressed; identical bytes are stored once.
- Production artifact is leak-scanned (`*.strapiapp.com`, `STRAPI` host, `/api/media-proxy?u=`).
- Fail-closed env: missing `CMS_RELEASE_MODE` fails CI/build instead of opening Production to Strapi.

## Verificación local

- `npm run test:cms` → unit 12 PASS, source boundary PASS, mutation PASS
- Missing `CMS_RELEASE_MODE` → `prepare-cms-build` exit 1 (`BLOCKED_CONFIG`)
