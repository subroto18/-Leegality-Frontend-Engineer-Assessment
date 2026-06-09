// src/layout/ProductLayout.tsx

import { Outlet } from "react-router-dom";
import ProductHeader from "@/features/products/components/ProductHeader/Header";
import { ProductLayoutProvider } from "../context/ProductLayoutContext";

const ProductLayout = () => {
  return (
    <ProductLayoutProvider>
      <div className="min-h-screen bg-white">
        <ProductHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </ProductLayoutProvider>
  );
};

export default ProductLayout;
