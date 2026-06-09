import { useQuery } from "@tanstack/react-query";
import { productService } from "@/api/services/product.service";
import { productQueryKeys } from "../constants/queryKeys";
import { ProductsResponse } from "../types/product.types";

interface UseProductsParams {
  limit?: number;
  skip?: number;
  category?: string;
  search?: string;
}

export const useProducts = ({
  limit = 12,
  skip = 0,
  search,
}: UseProductsParams = {}) => {
  return useQuery<ProductsResponse>({
    queryKey: productQueryKeys.products({
      limit,
      skip,
      search,
    }),

    queryFn: async () => {
      if (search?.trim()) {
        return productService.searchProducts(search);
      }
      return productService.getProducts(limit, skip);
    },
  });
};
