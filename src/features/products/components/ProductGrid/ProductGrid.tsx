import { useNavigate } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";

import { Product } from "../../types/product.types";

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
      <div className="flex justify-center py-20">
        <p className="text-slate-500">No products found</p>
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
