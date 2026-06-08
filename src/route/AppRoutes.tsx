import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalSuspense from "@/components/common/Suspense";
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Router basename="/">
      <Suspense fallback={<GlobalSuspense />}>
        <Routes>
          <Route index element={<>Home</>} />
          <Route path="dashboard" element={<></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
