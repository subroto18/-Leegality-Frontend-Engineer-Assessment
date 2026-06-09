export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCT_BY_ID: (id: string | number) => `/products/${id}`,
  CATEGORIES: "/products/categories",
  PRODUCTS_BY_CATEGORY: (category: string) => `/products/category/${category}`,
} as const;
