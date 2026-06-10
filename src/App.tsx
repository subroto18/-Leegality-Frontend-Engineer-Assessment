import React from "react";
import { Helmet } from "react-helmet";
import AppRoutes from "./route/AppRoutes";
import { SEO_CONFIG } from "./config/seo.config";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_CONFIG.title}</title>
        <meta name="description" content={SEO_CONFIG.description} />
        <meta name="keywords" content={SEO_CONFIG.keywords.join(", ")} />
        <meta name="author" content={SEO_CONFIG.author} />
        <meta property="og:title" content={SEO_CONFIG.title} />
        <meta property="og:description" content={SEO_CONFIG.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_CONFIG.title} />
        <meta name="twitter:description" content={SEO_CONFIG.description} />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Helmet>

      <AppRoutes />
    </>
  );
};

export default App;
