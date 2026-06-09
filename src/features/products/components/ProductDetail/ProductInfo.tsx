import { Rate } from "antd";
import ProductDescription from "./ProductDescription";
import { Product } from "../../types/product.types";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-900">{product.title}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span className="text-5xl font-bold text-slate-900">
          ${product.price}
        </span>

        <div className="flex items-center gap-2">
          <Rate disabled value={product.rating} />
          <span className="text-lg text-slate-500">({product.rating})</span>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex gap-2 text-lg">
          <span className="font-semibold">Brand:</span>

          <span className="text-slate-600">{product.brand}</span>
        </div>

        <div className="flex gap-2 text-lg">
          <span className="font-semibold">Category:</span>

          <span className="text-slate-600 capitalize">{product.category}</span>
        </div>

        <div className="flex gap-2 text-lg">
          <span className="font-semibold">Stock:</span>

          <span
            className={
              product.stock > 0
                ? "text-green-600 font-medium"
                : "text-red-500 font-medium"
            }
          >
            {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-8">
        <ProductDescription description={product.description} />
      </div>
    </div>
  );
};

export default ProductInfo;
