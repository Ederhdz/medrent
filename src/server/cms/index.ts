import { getCmsReleaseMode, isRuntimeStrapiDisabled, isSnapshotMode } from "./config";
import { remoteSource } from "./remoteSource";
import { snapshotSource } from "./snapshotSource";
import { cmsMedia } from "./media";
import type { CmsSource } from "./types";

function createCms(): CmsSource {
  const mode = getCmsReleaseMode();
  if (mode === "snapshot") {
    return snapshotSource;
  }
  if (isRuntimeStrapiDisabled()) {
    throw new Error("CMS_RUNTIME_STRAPI_DISABLED=1 cannot be combined with CMS_RELEASE_MODE=live");
  }
  return remoteSource;
}

export const cms: CmsSource = {
  get<T>(requestKey: string): Promise<T> {
    return createCms().get<T>(requestKey);
  },
};

export { cmsMedia, getCmsReleaseMode, isSnapshotMode, isRuntimeStrapiDisabled };
export type { CmsSource } from "./types";
