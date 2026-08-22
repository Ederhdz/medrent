# CMS isolation (Staging Live + Production Snapshot)

Production must not read live Strapi at runtime. Publish in Strapi is not a Production deploy.

## Modes

| `CMS_RELEASE_MODE` | Runtime source | Strapi at request time |
| --- | --- | --- |
| `live` | `remoteSource` (`cache: "no-store"`, in-flight dedupe) | Allowed (Staging) |
| `snapshot` | Bundled `src/generated/cms-snapshot.json` | Forbidden |

Missing `CMS_RELEASE_MODE` fails the build (`BLOCKED_CONFIG`). There is no default to `live`.

`CMS_RUNTIME_STRAPI_DISABLED=1` is required in Production. Combined with `live` it throws.

## Build

```text
npm run build        # snapshot: fetch CMS, hash media, rewrite URLs, astro build, leak audit
npm run build:live   # live: write empty snapshot stub so Vite resolves the import, then astro build
npm run test:cms     # unit + source boundary + mutation gates
```

Snapshot media is stored as `/cms-assets/<sha256-16>.<ext>`. Same bytes share one file. JSON fields are rewritten to those paths before the artifact is emitted.

Fingerprint is computed twice (JSON + media bytes). Mismatch throws `CMS_CHANGED_DURING_SNAPSHOT`.

## Vercel

Staging:

```text
CMS_RELEASE_MODE=live
STRAPI_URL=
STRAPI_API_TOKEN=
```

Production:

```text
CMS_RELEASE_MODE=snapshot
CMS_RUNTIME_STRAPI_DISABLED=1
STRAPI_URL=
STRAPI_API_TOKEN=
```

`STRAPI_*` are build-time only in Production. Runtime must not instantiate `remoteSource`.

## Runtime isolation

- `GET /api/strapi/*` → 404
- `GET /api/media-proxy` → 404 when `CMS_RELEASE_MODE=snapshot`
- `src/lib/*` does not import `src/server/cms` and does not read `STRAPI_URL`

## Verification

```text
npm run test:cms
CMS_RELEASE_MODE=snapshot npm run test:cms-leak
SMOKE_BASE_URL=http://127.0.0.1:4321 npm run test:cms-smoke
```
