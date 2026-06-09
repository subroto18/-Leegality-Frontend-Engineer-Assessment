import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useProductLayout } from "../context/useProductLayout";
import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import { useProduct } from "../hooks/useProduct";
import ProductDetailSkeleton from "../components/ProductDetail/Skeleton/ProductDetailSkeleton";
import ProductDetailError from "../components/ProductDetail/Error/ProductDetailError";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { setHasFilters } = useProductLayout();
  const { id } = useParams();
  useEffect(() => {
    setHasFilters(false);
  }, [setHasFilters]);

  const productId = Number(id);
  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useProduct({
    id: productId,
  });

  const handlePageChange = (page: number) => {
    navigate(`/product/${page}`);
  };

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

        {isLoading && <ProductDetailSkeleton />}
        {isError && <ProductDetailError onRetry={() => refetch()} />}
        {product && (
          <ProductDetail
            currentPage={productId}
            onPageChange={handlePageChange}
            product={product}
          />
        )}
      </Container>
    </div>
  );
};

export default ProductDetailPage;
