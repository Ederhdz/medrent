import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();
const boundaryProbe = join(root, "src/_cms_boundary_probe.ts");
const artifactProbe = join(root, "dist/_cms_artifact_probe.html");

function run(script, env = {}) {
  return spawnSync(process.execPath, [join(root, "scripts", script)], {
    cwd: root,
    env: { ...process.env, ...env },
    encoding: "utf8",
  });
}

function assertFailed(result, label) {
  if (result.status === 0) {
    throw new Error(`${label}: expected FAIL, got PASS\n${result.stdout}\n${result.stderr}`);
  }
}

function assertPassed(result, label) {
  if (result.status !== 0) {
    throw new Error(`${label}: expected PASS, got FAIL\n${result.stdout}\n${result.stderr}`);
  }
}

async function cleanup() {
  await rm(boundaryProbe, { force: true });
  await rm(artifactProbe, { force: true });
}

async function main() {
  await cleanup();

  await writeFile(
    boundaryProbe,
    'export async function probe() { return strapiFetch("/products"); }\n',
  );
  const boundaryMutated = run("audit-cms-boundaries.mjs");
  assertFailed(boundaryMutated, "boundary mutation");
  await rm(boundaryProbe, { force: true });
  const boundaryClean = run("audit-cms-boundaries.mjs");
  assertPassed(boundaryClean, "boundary revert");

  await mkdir(dirname(artifactProbe), { recursive: true });
  const existedDist = existsSync(join(root, "dist"));
  await writeFile(
    artifactProbe,
    '<img src="https://example.media.strapiapp.com/test.webp" />\n',
  );
  const artifactMutated = run("audit-production-build.mjs", { CMS_RELEASE_MODE: "snapshot" });
  assertFailed(artifactMutated, "artifact mutation");
  await rm(artifactProbe, { force: true });
  const artifactClean = run("audit-production-build.mjs", { CMS_RELEASE_MODE: "snapshot" });
  assertPassed(artifactClean, "artifact revert");
  if (!existedDist) {
    await rm(join(root, "dist"), { recursive: true, force: true });
  }

  console.log("CMS_MUTATION_TESTS PASS");
}

main().catch(async (err) => {
  await cleanup();
  console.error(err.message || err);
  process.exit(1);
});
