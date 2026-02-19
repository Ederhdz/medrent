import type { Product } from "./types";

export function mapStrapiProduct(item: any): Product {
  const attr = item;

  return {
    id: item.id,
    name: attr?.name ?? "",
    slug: attr?.slug ?? "",
    shortDescription: attr?.shortDescription,
    description: attr?.description,
    isNew: attr?.isNew,
    isActive: attr?.isActive,
    createdAt: attr?.createdAt,
    coverImage: attr?.gallery?.[0]?.url ?? "",
    gallery: attr?.gallery?.map((img: any) => img.url) ?? [],
    documents: attr?.documents?.map((doc: any) => doc.url) ?? [],
    benefit: attr?.benefit ?? [],
    faqItem: attr?.faqItem ?? [],
    technicalSheet: attr?.technicalSheet ?? [],
    technicalSpecifications: attr?.technicalSpecifications ?? [],
    relatedConsumables: attr?.relatedConsumables ?? [],
    relatedProducts: attr?.relatedProducts ?? [],
    variants: attr?.variants ?? [],
    subcategory: attr?.subcategory ?? [],
    brand: attr?.brand ?? []
  };
}
