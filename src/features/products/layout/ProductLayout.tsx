import { Outlet } from "react-router-dom";
import ProductHeader from "@/features/products/components/ProductHeader/Header";
import { ProductLayoutProvider } from "../context/ProductLayoutContext";
import { ProductFilterProvider } from "../context/ProductFilterContext";

const ProductLayout = () => {
  return (
    <ProductLayoutProvider>
      <div className="min-h-screen bg-white">
        <ProductFilterProvider>
          <ProductHeader />
          <main>
            <Outlet />
          </main>
        </ProductFilterProvider>
      </div>
    </ProductLayoutProvider>
  );
};

export default ProductLayout;
