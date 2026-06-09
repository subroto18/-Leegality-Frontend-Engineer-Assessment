import { Image } from "antd";

const ProductImage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        preview={false}
        src="https://dummyjson.com/image/400x400"
        alt="Product"
        className="w-full max-w-md object-contain"
      />
    </div>
  );
};

export default ProductImage;
