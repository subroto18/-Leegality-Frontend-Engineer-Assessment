import { Rate, Tag } from "antd";
import ProductDescription from "./ProductDescription";

const ProductInfo = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold mb-4">iPhone 15 Pro Max</h1>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="text-4xl font-bold">$1299</span>

        <div className="flex items-center gap-2">
          <Rate disabled defaultValue={5} />
          <span className="text-gray-500">(4.8)</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Brand:</span>

          <Tag color="blue">Apple</Tag>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Category:</span>

          <Tag color="green">Smartphones</Tag>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductInfo;
