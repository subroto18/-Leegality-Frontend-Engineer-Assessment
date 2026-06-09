import { productService } from "@/api/services/product.service";
import { useQuery } from "@tanstack/react-query";
import { productQueryKeys } from "../constants/queryKeys";
export const useProduct = (id?: string) => {
  return useQuery({
    queryKey: productQueryKeys.product(id),
    queryFn: () => productService.getProduct(id!),
    enabled: !!id,
  });
};
