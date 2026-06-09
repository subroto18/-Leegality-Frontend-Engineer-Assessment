import { productService } from "@/api/services/product.service";
import { useQuery } from "@tanstack/react-query";
import { productQueryKeys } from "../constants/queryKeys";
interface UseProductsParams {
  limit?: number;
  skip?: number;
}
export const useProducts = ({
  limit = 12,
  skip = 0,
}: UseProductsParams = {}) => {
  return useQuery({
    queryKey: productQueryKeys.products(limit, skip),
    queryFn: () => productService.getProducts(limit, skip),
  });
};
