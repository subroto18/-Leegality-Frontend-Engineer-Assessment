// src/layout/ProductLayout.tsx

import { Outlet } from "react-router-dom";
import ProductHeader from "@/features/products/components/ProductHeader/Header";

const ProductLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProductHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProductLayout;
