import { normalizeRequestKey } from "./key";
import stubSnapshot from "./cms-snapshot.stub.json";
import type { CmsSnapshot, CmsSource } from "./types";

type SnapshotModule = { default?: CmsSnapshot } | CmsSnapshot;

async function loadBundledSnapshot(): Promise<CmsSnapshot> {
  try {
    const generated = (await import("../../generated/cms-snapshot.json")) as SnapshotModule;
    const snapshot = "default" in generated && generated.default ? generated.default : (generated as CmsSnapshot);
    if (snapshot && snapshot.requests && Object.keys(snapshot.requests).length > 0) {
      return snapshot;
    }
  } catch {
    // Fall through to the committed stub so live/dev still typechecks.
  }
  return stubSnapshot as CmsSnapshot;
}

const snapshotPromise = loadBundledSnapshot();

export const snapshotSource: CmsSource = {
  async get<T>(requestKey: string): Promise<T> {
    const snapshot = await snapshotPromise;
    const key = normalizeRequestKey(requestKey);
    if (!Object.prototype.hasOwnProperty.call(snapshot.requests, key)) {
      throw new Error(`CMS snapshot miss for key: ${key}`);
    }
    return snapshot.requests[key] as T;
  },
};
