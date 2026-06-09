import { useState } from "react";
import { Image } from "antd";
import clsx from "clsx";

interface ProductImageProps {
  images: string[];
  thumbnail: string;
}

const ProductImage = ({ images, thumbnail }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(thumbnail);

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-hidden">
        <Image
          preview
          src={selectedImage}
          alt="Product"
          className="
            w-full
            h-[500px]
            object-contain
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image) => {
          const isActive = selectedImage === image;

          return (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={clsx(
                `
                h-24
                w-24
                shrink-0
                rounded-xl
                bg-white
                p-2
                transition-all
                duration-200
                border
                overflow-hidden
                `,
                isActive
                  ? "border-primary shadow-md scale-105"
                  : "border-gray-200 hover:border-primary hover:shadow-sm",
              )}
            >
              <img
                src={image}
                alt="thumbnail"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-200
                  hover:scale-110
                "
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
