export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
  availabilityStatus: string;
  minimumOrderQuantity: number;
  sku: string;
  weight: number;
  tags: string[];
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  reviews: ProductReview[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductFiltersProps {
  categories: Category[];
  isCategoryLoading?: boolean;
  isProductLoading?: boolean;
  brands: string[];
  minPrice: number;
  maxPrice: number;
}
export interface Category {
  slug: string;
  name: string;
  url: string;
}
