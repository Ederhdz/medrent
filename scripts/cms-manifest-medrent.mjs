export const SITE = "medrent";

export const STATIC_KEYS = [
  "/site-setting?populate=*",
  "/home-page?populate[sliderHero][populate][desktopImage]=true&populate[sliderHero][populate][mobileImage]=true&pagination[limit]=1",
  "/promo-sliders?populate[desktopImage]=true&populate[mobileImage]=true&sort=displayOrder:asc",
  "/events-page?populate[events][populate]=image&populate=heroImage",
  "/plp?populate=*",
  "/about?populate=*",
  "/legal-content?populate[legalPages][populate]=imageHero",
  "/brands?populate=*",
  "/testimonials?filters[isActive][$eq]=true&populate=*",
  "/subcategories?filters[isActive][$eq]=true&populate[category]=true&populate[image]=true&populate[products][populate][brand]=true",
  "/categories?filters[isActive][$eq]=true&populate[subcategories][sort][0]=order:asc&populate[subcategories][populate][image]=true&populate[subcategories][populate][products][populate][brand]=true&populate[figure]=true&populate[heroImage]=true&populate[listImage]=true&populate[sliderHero][populate][desktopImage]=true&populate[sliderHero][populate][mobileImage]=true",
  "/blog-articles?sort=publishedAt:desc&pagination[pageSize]=50&populate[heroImage]=true&populate[writer][populate][avatar]=true",
  "/blog-articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=50",
  "/blog-articles?populate[heroImage]=true&populate[writer][populate][avatar]=true&sort=publishedAt:desc",
  "/blog-articles?populate=*&sort=publishedAt:desc",
  "/blog-articles?fields[0]=slug&fields[1]=isActive&pagination[pageSize]=1000",
  "/blog-articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=100",
  "/blog-articles?pagination[pageSize]=500&populate[writer]=true",
  "/blog-articles?populate[heroImage]=true&populate[speciality]=true&populate[writer][populate]=*&sort=publishedAt:desc&pagination[pageSize]=2000",
  "/blog-articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=2000",
  "/article-classifications?pagination[pageSize]=100&sort=tag:asc&populate[articles]=true",
  "/article-classifications?pagination[pageSize]=100&sort=tag:asc",
  "/writers?fields[0]=slug&pagination[pageSize]=1000",
  "/writers?populate[avatar]=true&populate[heroImage]=true&populate[articles]=true&sort=fullName:asc",
  "/writers?populate[avatar]=true",
  "/blog-articles?fields[0]=slug&populate[writer][fields][0]=slug&pagination[pageSize]=1000",
];

export const PDP_POPULATE =
  "&populate[gallery]=true&populate[documents]=true&populate[benefit][populate][icon]=true&populate[faqItem]=true&populate[technicalSheet][populate][technicalFeature]=true&populate[technicalSpecifications]=true&populate[relatedConsumables][populate][gallery]=true&populate[relatedProducts][populate][gallery]=true&populate[relatedProducts][populate][brand]=true&populate[variants]=true&populate[subcategory]=true&populate[brand]=true";

export function expandDynamicKeys(requests) {
  const keys = new Set();
  const year = new Date().getFullYear();
  keys.add(
    `/events-page?populate[events][filters][startDate][$gte]=${year}-01-01&populate[events][filters][startDate][$lte]=${year}-12-31&populate[events][sort][0]=startDate:asc&populate[events][populate][image]=true&populate[events][populate][category]=true&populate=heroImage`,
  );

  const slugFrom = (entry) =>
    entry?.attributes?.slug ?? entry?.slug ?? null;

  const products = requests["/products?filters[isActive][$eq]=true&fields[0]=slug&pagination[pageSize]=1000"];
  for (const row of products?.data ?? []) {
    const slug = slugFrom(row);
    if (slug) {
      keys.add(
        `/products?filters[slug][$eq]=${encodeURIComponent(slug)}&filters[isActive][$eq]=true${PDP_POPULATE}`,
      );
    }
  }

  const articles = requests["/blog-articles?fields[0]=slug&fields[1]=isActive&pagination[pageSize]=1000"];
  for (const row of articles?.data ?? []) {
    const attrs = row?.attributes ?? row;
    const slug = attrs?.slug;
    if (slug && attrs?.isActive !== false) {
      keys.add(
        `/blog-articles?filters[slug][$eq]=${encodeURIComponent(slug)}&filters[isActive][$eq]=true&populate[heroImage]=true&populate[writer][populate][avatar]=true&populate[content][populate]=*`,
      );
      keys.add(
        `/blog-articles?filters[slug][$eq]=${encodeURIComponent(slug)}&filters[isActive][$eq]=true&populate=*`,
      );
    }
  }

  const writers = requests["/writers?fields[0]=slug&pagination[pageSize]=1000"];
  for (const row of writers?.data ?? []) {
    const slug = slugFrom(row);
    if (slug) {
      keys.add(`/writers?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`);
    }
  }

  const brands = requests["/brands?populate=*"];
  for (const row of brands?.data ?? []) {
    const slug = slugFrom(row);
    if (slug) {
      keys.add(`/brands?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[SEO]=true`);
      keys.add(
        `/brands?filters[slug][$eq]=${encodeURIComponent(slug)}&populate[logo]=true&populate[SEO][populate][ogImage]=true&populate[products][populate][subcategory][populate][category]=true&populate[featuredProducts][populate][subcategory][populate][category]=true&populate[interstitialLogo]=true&populate[sliderHero][populate][desktopImage]=true&populate[sliderHero][populate][mobileImage]=true&populate[interestitialCard][populate][image]=true&populate[interestitialCard][populate][products][populate][subcategory][populate][category]=true`,
      );
    }
  }

  const legal = requests["/legal-content?populate[legalPages][populate]=imageHero"];
  for (const page of legal?.data?.attributes?.legalPages ?? legal?.data?.legalPages ?? []) {
    const slug = page?.slug ?? page?.attributes?.slug;
    if (slug) keys.add(`/legal-content?filters[legalPages][slug][$eq]=${encodeURIComponent(slug)}`);
  }

  return [...keys];
}

export const DISCOVERY_KEYS = [
  "/products?filters[isActive][$eq]=true&fields[0]=slug&pagination[pageSize]=1000",
];
