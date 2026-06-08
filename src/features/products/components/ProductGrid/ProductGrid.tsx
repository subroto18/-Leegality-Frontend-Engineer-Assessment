// ProductGrid.tsx

import ProductCard from "../ProductCard/ProductCard";

const mockProducts = Array.from({ length: 8 }).map((_, index) => ({
  id: index,
  title: "Smartphone",
  price: 699,
  rating: 4.5,
  image: "https://dummyjson.com/image/400x300",
}));

const ProductGrid = () => {
  return (
    <div
      className="
          grid
          grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
          gap-6
        "
    >
      {mockProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
