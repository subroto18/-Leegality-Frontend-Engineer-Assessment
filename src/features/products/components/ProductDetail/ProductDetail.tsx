import Pagination from "@/components/ui/Pagination";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ReviewList from "./ReviewList";

const ProductDetail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10">
      <div className="flex flex-col">
        <ProductImage />

        <div className="mt-[5rem]  justify-center ">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </div>

      <div className="border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-10 pt-8 lg:pt-0">
        <ProductInfo />

        <div className="mt-8">
          <ReviewList />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
