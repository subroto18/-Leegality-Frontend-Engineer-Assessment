import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const mockProducts = Array.from({ length: 8 }).map((_, index) => ({
  id: index + 1,
  title: "Smartphone",
  price: 699,
  rating: 4.5,
  image: "https://dummyjson.com/image/400x300",
}));

const ProductGrid = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        grid
        grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
        gap-6
      "
    >
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
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
