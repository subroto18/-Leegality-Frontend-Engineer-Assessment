import { Rate } from "antd";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  onClick?: () => void;
}

const ProductCard = ({
  image,
  title,
  price,
  rating,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        bg-white
        rounded-xl
        border
        border-gray-200
        shadow-sm
        hover:shadow-md
        transition-all
        duration-200
        overflow-hidden
      "
    >
      {/* Image */}
      <div className="h-[220px] flex items-center justify-center p-6">
        <img
          src={image}
          alt={title}
          className="
            max-h-full
            max-w-full
            object-contain
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Content */}
      <div className="p-4">
        <h3
          className="
            text-[18px]
            font-semibold
            text-gray-800
            mb-3
            truncate
          "
        >
          {title}
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-[20px] font-bold text-gray-900">${price}</span>

          <div className="flex items-center gap-1">
            <Rate disabled allowHalf value={rating} className="text-[14px]" />
            <span className="text-gray-500 text-sm">({rating})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
