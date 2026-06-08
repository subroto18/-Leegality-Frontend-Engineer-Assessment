// src/layout/ProductLayout.tsx

import { Outlet } from "react-router-dom";
import ProductHeader from "@/features/products/components/ProductHeader/Header";

const ProductLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <ProductHeader />
      <main className="py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ProductLayout;
