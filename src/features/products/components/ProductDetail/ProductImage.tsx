import { Image } from "antd";

const ProductImage = () => {
  return (
    <div className="border rounded-xl p-8 flex items-center justify-center">
      <Image
        preview={false}
        src="https://dummyjson.com/image/400x400"
        alt="Product"
        className="max-h-[500px] object-contain"
      />
    </div>
  );
};

export default ProductImage;
