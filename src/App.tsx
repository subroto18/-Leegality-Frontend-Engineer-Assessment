import React from "react";
import AppRoutes from "./route/AppRoutes";
import { SEO_CONFIG } from "./config/seo.config";
import { Helmet } from "react-helmet";
const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_CONFIG.title}</title>
      </Helmet>
      <AppRoutes />
    </>
  );
};

export default App;
