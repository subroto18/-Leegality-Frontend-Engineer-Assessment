import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/product.types";
import { SearchOutlined } from "@ant-design/icons";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-[340px] rounded-xl bg-slate-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div
          className="
            w-20
            h-20
            rounded-full
            bg-slate-100
            flex
            items-center
            justify-center
            mb-6
          "
        >
          <SearchOutlined className="text-3xl text-slate-400" />
        </div>

        <h3 className="text-2xl font-semibold text-slate-800">
          No Products Found
        </h3>

        <p className="mt-3 max-w-md text-center text-slate-500">
          We couldn't find any products matching your current filters. Try
          adjusting your search or clearing filters.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
        gap-6
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.thumbnail}
          title={product.title}
          price={product.price}
          rating={product.rating}
          onClick={() => navigate(`/product/${product.id}`)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
