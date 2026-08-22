#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PROJECT_ID="prj_a0EH0MQD3a3iuAVdyi9aFI8gvnjP"
echo "== Medrent env pull (Production) =="
if ! vercel whoami >/dev/null 2>&1; then
  echo "No hay sesión Vercel. Ejecuta: vercel login"
  exit 1
fi
# Link without prompts if possible
if [ ! -f .vercel/project.json ]; then
  vercel link --yes --project "$PROJECT_ID" || vercel link --yes --project medrent
fi
vercel env pull .env --environment=production --yes
# Verify keys exist without printing values
node -e '
const fs=require("fs");
const env=fs.readFileSync(".env","utf8");
for (const k of ["STRAPI_URL","STRAPI_API_TOKEN","HUBSPOT_PAT_TK"]) {
  const m=env.match(new RegExp("^"+k+"=(.*)$","m"));
  const present=Boolean(m && m[1] && m[1].trim() && !m[1].includes("your-strapi"));
  console.log(k+":", present?"SET":"MISSING");
}
'
echo "Done. .env is gitignored — do not commit."
