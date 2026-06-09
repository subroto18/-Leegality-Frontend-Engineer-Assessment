import { axiosInstance } from "../axios";
import { API_ENDPOINTS } from "../endpoints";

import type {
  Category,
  Product,
  ProductsResponse,
} from "@/features/products/types/product.types";

export const productService = {
  getProducts: async (limit = 12, skip = 0): Promise<ProductsResponse> => {
    const { data } = await axiosInstance.get<ProductsResponse>(
      API_ENDPOINTS.PRODUCTS,
      {
        params: {
          limit,
          skip,
        },
      },
    );

    return data;
  },

  searchProducts: async (query: string): Promise<ProductsResponse> => {
    const { data } = await axiosInstance.get<ProductsResponse>(
      API_ENDPOINTS.SEARCH_PRODUCTS,
      {
        params: {
          q: query,
        },
      },
    );

    return data;
  },

  getProduct: async (id: number | undefined): Promise<Product> => {
    const { data } = await axiosInstance.get<Product>(
      API_ENDPOINTS.PRODUCT_BY_ID(id),
    );

    return data;
  },

  getCategories: async (): Promise<Category[]> => {
    const { data } = await axiosInstance.get<Category[]>(
      API_ENDPOINTS.CATEGORIES,
    );

    return data;
  },

  getProductsByCategory: async (
    category: string,
  ): Promise<ProductsResponse> => {
    const { data } = await axiosInstance.get<ProductsResponse>(
      API_ENDPOINTS.PRODUCTS_BY_CATEGORY(category),
    );

    return data;
  },
};
