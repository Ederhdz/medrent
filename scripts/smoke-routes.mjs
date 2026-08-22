const base = String(process.env.SMOKE_BASE_URL || "").replace(/\/+$/, "");
if (!base) {
  console.error("SMOKE_BASE_URL is required");
  process.exit(2);
}

const routes = (process.env.SMOKE_ROUTES || "/,/productos,/blog,/nuestras-marcas,/eventos")
  .split(",")
  .map((route) => route.trim())
  .filter(Boolean);

const leakRe = /(?:media\.)?strapiapp\.com|\/api\/media-proxy\?u=/i;
let failed = 0;

for (const route of routes) {
  const url = `${base}${route.startsWith("/") ? route : `/${route}`}`;
  try {
    const res = await fetch(url, { redirect: "follow" });
    const text = await res.text();
    const leaks = leakRe.test(text);
    if (res.status !== 200 || leaks) {
      failed += 1;
      console.error(`FAIL ${url} status=${res.status} leak=${leaks}`);
      continue;
    }
    console.log(`PASS ${url}`);
  } catch (err) {
    failed += 1;
    console.error(`FAIL ${url} ${err.message}`);
  }
}

if (failed) {
  process.exit(1);
}
console.log("ROUTE_SMOKE PASS");
