const RAW_STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN;

function normalizeStrapiBaseUrl(rawUrl: string) {
  const trimmed = (rawUrl || "").replace(/\/+$/, "");
  if (!trimmed) return "";
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
}

const STRAPI_URL = normalizeStrapiBaseUrl(RAW_STRAPI_URL);

export async function strapiFetch(path: string) {
    console.log(`Fetching from Strapi: ${STRAPI_URL}${path}`);
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Strapi error ${res.status}: ${error}`);
  }

  return res.json();
}
