import { Card, Rate } from "antd";

const reviews = [
  {
    reviewer: "John",
    rating: 5,
    comment: "Excellent product",
  },
  {
    reviewer: "Alice",
    rating: 4,
    comment: "Very good quality",
  },
];

const ReviewList = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <Card key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{review.reviewer}</span>

              <Rate disabled value={review.rating} />
            </div>

            <p>{review.comment}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ReviewList;
