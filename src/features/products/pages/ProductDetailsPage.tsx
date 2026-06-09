import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useProductLayout } from "../context/useProductLayout";
import { useEffect } from "react";

const ProductDetailPage = () => {
  const navigate = useNavigate();

  const { setHasFilters } = useProductLayout();

  useEffect(() => {
    setHasFilters(false);
  }, [setHasFilters]);

  return (
    <div className="max-w-7xl mx-auto">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        Back to Products
      </Button>

      <div className="bg-white rounded-xl shadow-sm border p-8">
        <ProductDetail />
      </div>
    </div>
  );
};

export default ProductDetailPage;
