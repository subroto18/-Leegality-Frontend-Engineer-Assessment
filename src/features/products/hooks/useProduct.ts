import { productService } from "@/api/services/product.service";
import { useQuery } from "@tanstack/react-query";
import { productQueryKeys } from "../constants/queryKeys";
export const useProduct = ({ id }: { id: number | undefined }) => {
  return useQuery({
    queryKey: productQueryKeys.product(id),
    queryFn: () => productService.getProduct(id),
  });
};
