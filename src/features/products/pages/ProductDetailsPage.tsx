import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useProductLayout } from "../context/useProductLayout";
import { useEffect } from "react";
import Container from "@/components/common/Container";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { setHasFilters } = useProductLayout();
  useEffect(() => {
    setHasFilters(false);
  }, [setHasFilters]);

  return (
    <div className="mx-auto px-4 py-6 min-h-screen bg-[#F8F8FB]">
      <Container>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          Back
        </Button>

        <ProductDetail />
      </Container>
    </div>
  );
};

export default ProductDetailPage;
