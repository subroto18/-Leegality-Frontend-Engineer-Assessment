import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalSuspense from "@/components/common/Suspense";

const NotFound = lazy(() => import("../pages/NotFound"));

const ProductLayout = lazy(
  () => import("@/features/products/layout/ProductLayout"),
);

const ProductListingPage = lazy(
  () => import("@/features/products/pages/ProductListingPage"),
);

const ProductDetailPage = lazy(
  () => import("@/features/products/pages/ProductDetailsPage"),
);

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<GlobalSuspense />}>
        <Routes>
          {/* Product Routes */}
          <Route element={<ProductLayout />}>
            <Route index element={<ProductListingPage />} />

            <Route path="product/:id" element={<ProductDetailPage />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
