import { Rate } from "antd";

import { ProductReview } from "../../types/product.types";

interface ReviewListProps {
  reviews: ProductReview[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  if (!reviews?.length) return null;

  return (
    <div className="border-t border-gray-200">
      <h2 className="text-3xl font-semibold mb-6">Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-100  last:border-none"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <h4 className="font-semibold text-xl">{review.reviewerName}</h4>
              <Rate disabled value={review.rating} />
              <span className="text-lg text-slate-500">({review.rating})</span>
            </div>
            <p className="mt-3 text-slate-600 leading-7">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
