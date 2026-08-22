export function normalizeRequestKey(path: string): string {
  const raw = String(path || "").trim();
  if (!raw) {
    throw new Error("CMS request key must be a non-empty path");
  }
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  const qIndex = withSlash.indexOf("?");
  if (qIndex === -1) return withSlash;
  const pathname = withSlash.slice(0, qIndex);
  const params = new URLSearchParams(withSlash.slice(qIndex + 1));
  params.sort();
  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}
