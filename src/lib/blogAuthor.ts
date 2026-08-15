const TEAM_MEDRENT_SLUG = "team-medrent";

export function blogAuthorSlug(slug: unknown): string {
  if (typeof slug !== "string") return TEAM_MEDRENT_SLUG;
  const trimmed = slug.trim();
  if (!trimmed || trimmed === "undefined" || trimmed === "null") return TEAM_MEDRENT_SLUG;
  return trimmed;
}

export function blogAuthorPath(slug: unknown): string {
  return `/blog/autor/${blogAuthorSlug(slug)}`;
}
