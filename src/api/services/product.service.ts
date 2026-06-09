import { axiosInstance } from "../axios";

export const productService = {
  getProducts: async (limit = 12, skip = 0) => {
    const { data } = await axiosInstance.get("/products", {
      params: {
        limit,
        skip,
      },
    });

    return data;
  },

  getProduct: async (id: string) => {
    const { data } = await axiosInstance.get(`/products/${id}`);

    return data;
  },

  getCategories: async () => {
    const { data } = await axiosInstance.get("/products/categories");

    return data;
  },

  getProductsByCategory: async (category: string) => {
    const { data } = await axiosInstance.get(`/products/category/${category}`);

    return data;
  },
};
