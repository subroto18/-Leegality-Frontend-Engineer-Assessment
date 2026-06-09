import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ReviewList from "./ReviewList";

import { Product } from "../../types/product.types";
import Pagination from "@/components/ui/Pagination";

interface ProductDetailProps {
  product: Product;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ProductDetail = ({
  product,
  currentPage,
  onPageChange,
}: ProductDetailProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10">
      <div className="flex flex-col">
        <ProductImage images={product.images} thumbnail={product.thumbnail} />
        <div className="mt-[5rem]  justify-center ">
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={onPageChange}
          />
        </div>
      </div>

      <div className="border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-10 pt-8 lg:pt-0">
        <ProductInfo product={product} />

        <div className="mt-8">
          <ReviewList reviews={product.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
