import { cms } from "../cms";

export async function getPromotionSlides() {
  const res = await cms.get(
    "/promo-sliders?populate[desktopImage]=true&populate[mobileImage]=true&sort=displayOrder:asc",
  );

  return Array.isArray(res?.data) ? res.data : [];
}
