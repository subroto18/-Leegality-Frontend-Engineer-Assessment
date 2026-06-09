import { Button, Result } from "antd";

interface ProductDetailErrorProps {
  onRetry: () => void;
}

const ProductDetailError = ({ onRetry }: ProductDetailErrorProps) => {
  return (
    <Result
      status="error"
      title="Unable to load product"
      subTitle="Something went wrong while fetching the product details."
      extra={
        <Button type="primary" onClick={onRetry}>
          Try Again
        </Button>
      }
    />
  );
};

export default ProductDetailError;
