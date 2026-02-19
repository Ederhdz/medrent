export interface Product {
    id: number;
    name: string;
    slug: string;
    shortDescription?: string;
    description?: string;
    isNew: boolean;
    isActive: boolean;
    createdAt: string;
    coverImage?: string;
    gallery?: string[];
    documents?: string[];
    benefit?: Benefit[];
    faqItem?: any[];
    technicalSheet?: any[];
    technicalSpecifications?: any[];
    relatedConsumables?: any[];
    relatedProducts?: any[];
    variants?: any[];
    subcategory?: any;
    brand?: any;

    // benefit?: Benefit[];

    // brand?: {
    //     id?: number;
    //     name?: string;
    //     slug?: string;
    // };
    // categories?: {
    //     id?: number;
    //     name?: string;
    //     slug?: string;
    // }[];
}

export interface Benefit {
    id?: number;
    benefit?: string;
    description?: string;
}
