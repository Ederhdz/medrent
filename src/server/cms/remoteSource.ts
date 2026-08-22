import { getStrapiApiToken, isRuntimeStrapiDisabled, normalizeStrapiApiBase, requireStrapiUrl } from "./config";
import { normalizeRequestKey } from "./key";
import { rewriteLiveMedia } from "./media";
import type { CmsSource } from "./types";

const inFlightRequests = new Map<string, Promise<unknown>>();

function buildRequestUrl(path: string): string {
  const apiBase = normalizeStrapiApiBase(requireStrapiUrl());
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath.replace(/^\//, ""), `${apiBase}/`).toString();
}

async function fetchFresh(path: string): Promise<unknown> {
  if (isRuntimeStrapiDisabled()) {
    throw new Error("CMS_RUNTIME_STRAPI_DISABLED=1 forbids remote Strapi fetches");
  }
  const token = getStrapiApiToken();
  const requestUrl = buildRequestUrl(path);
  const res = await fetch(requestUrl, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Strapi error ${res.status}: ${error}`);
  }
  const data = await res.json();
  return rewriteLiveMedia(data);
}

export const remoteSource: CmsSource = {
  async get<T>(requestKey: string): Promise<T> {
    const key = normalizeRequestKey(requestKey);
    const pending = inFlightRequests.get(key);
    if (pending) {
      return pending as Promise<T>;
    }
    const request = fetchFresh(key).finally(() => {
      inFlightRequests.delete(key);
    });
    inFlightRequests.set(key, request);
    return request as Promise<T>;
  },
};
