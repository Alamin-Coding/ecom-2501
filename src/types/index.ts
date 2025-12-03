type Dimensions = {
    width: number;
    height: number;
    depth: number;
}
type Reviews = {
    rating: number;
    comment: string;
    date?: string;
    reviewerName?: string;
    reviewerEmail: string;
}
type Meta = {
    createdAt?: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation?: string;
    shippingInformation: string;
    availabilityStatus: "In Stock" | "Out of Stock";
    reviews: Reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
    size?: string[];
};

export interface ProductCart extends Product {
    quantity: number;
    subtotal: number;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type Categories = {
    slug: string;
    name: string;
    url: string;
}