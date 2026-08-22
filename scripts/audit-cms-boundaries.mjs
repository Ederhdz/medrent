import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { isAllowlistedSourcePath } from "./cms-lib.mjs";

const root = process.cwd();
const srcRoot = join(root, "src");

const PATTERNS = [
  { name: "strapiClient", re: /strapiClient/ },
  { name: "STRAPI_URL", re: /STRAPI_URL/ },
  { name: "strapiapp.com", re: /strapiapp\.com/i },
  { name: "strapiFetch", re: /strapiFetch\s*\(/ },
];

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, out);
      continue;
    }
    if (!/\.(ts|js|astro|mjs)$/i.test(entry.name)) continue;
    out.push(full);
  }
  return out;
}

async function main() {
  const files = await walk(srcRoot);
  const violations = [];

  for (const file of files) {
    const rel = file.slice(root.length + 1);
    if (isAllowlistedSourcePath(rel)) continue;
    const text = await readFile(file, "utf8");
    for (const pattern of PATTERNS) {
      if (pattern.re.test(text)) {
        violations.push({ file: rel, pattern: pattern.name });
      }
    }
  }

  if (violations.length) {
    console.error("SOURCE_BOUNDARY_AUDIT FAIL");
    for (const v of violations) {
      console.error(`${v.file}: ${v.pattern}`);
    }
    process.exit(1);
  }

  console.log("SOURCE_BOUNDARY_AUDIT PASS");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
