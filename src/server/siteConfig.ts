import { cms } from "./cms";

export async function getSiteConfig() {
  try {
    const response = await cms.get<{ data?: Record<string, unknown> }>(
      "/site-setting?populate=*",
    );
    return response?.data || {};
  } catch {
    return {};
  }
}
