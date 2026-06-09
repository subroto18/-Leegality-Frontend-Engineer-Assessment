import { productService } from "@/api/services/product.service";
import { useQuery } from "@tanstack/react-query";
import { productQueryKeys } from "../constants/queryKeys";

export const useCategories = () => {
  return useQuery({
    queryKey: productQueryKeys.categories,
    queryFn: () => productService.getCategories(),
  });
};
