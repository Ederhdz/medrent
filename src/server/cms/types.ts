export type CmsReleaseMode = "live" | "snapshot";

export interface CmsSource {
  get<T>(requestKey: string): Promise<T>;
}

export interface CmsSnapshot {
  site: string;
  generatedAt: string | null;
  cmsFingerprint: string | null;
  requestCount: number;
  assetCount: number;
  assetBytes: number;
  gitSha: string | null;
  mode: string;
  requests: Record<string, unknown>;
}
