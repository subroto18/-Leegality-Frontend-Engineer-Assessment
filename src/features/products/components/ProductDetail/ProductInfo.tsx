import { Rate, Tag } from "antd";
import ProductDescription from "./ProductDescription";

const ProductInfo = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">iPhone 15 Pro Max</h1>

      <div className="mb-4">
        <Rate disabled defaultValue={5} />
      </div>

      <div className="text-4xl font-bold text-blue-600 mb-8">$1299</div>

      <div className="space-y-4 mb-8">
        <div>
          <span className="font-semibold">Brand:</span>

          <Tag color="blue" className="ml-2">
            Apple
          </Tag>
        </div>

        <div>
          <span className="font-semibold">Category:</span>

          <Tag color="green" className="ml-2">
            Smartphones
          </Tag>
        </div>
      </div>

      <ProductDescription />
    </div>
  );
};

export default ProductInfo;
