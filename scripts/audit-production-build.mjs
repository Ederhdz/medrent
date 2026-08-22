import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  configuredStrapiHostname,
  isSnapshotMode,
  requireCmsReleaseMode,
  scanDirectoryForLeaks,
} from "./cms-lib.mjs";

const root = process.cwd();

async function main() {
  requireCmsReleaseMode();
  if (!isSnapshotMode()) {
    console.log("PRODUCTION_CMS_LEAK_AUDIT SKIP (live mode)");
    return;
  }

  const extraHosts = [];
  try {
    extraHosts.push(configuredStrapiHostname());
  } catch {
    /* no STRAPI_URL during audit-only runs */
  }

  const dirs = ["dist", join(".vercel", "output", "static"), join(".vercel", "output", "functions")];
  const findings = [];
  for (const dir of dirs) {
    const full = join(root, dir);
    if (!existsSync(full)) continue;
    findings.push(...(await scanDirectoryForLeaks(full, extraHosts)));
  }

  if (findings.length) {
    console.error("PRODUCTION_CMS_LEAK_AUDIT FAIL");
    for (const item of findings.slice(0, 20)) {
      console.error(`${item.file}: ${item.hits.join(", ")}`);
    }
    process.exit(1);
  }

  console.log("PRODUCTION_CMS_LEAK_AUDIT PASS");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
