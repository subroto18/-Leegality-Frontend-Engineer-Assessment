import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import ReviewList from "./ReviewList";

const ProductDetail = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductImage />

        <div>
          <ProductInfo />
          <ProductDescription />
        </div>
      </div>

      <div className="mt-12">
        <ReviewList />
      </div>
    </>
  );
};

export default ProductDetail;