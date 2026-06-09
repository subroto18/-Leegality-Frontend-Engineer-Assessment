const ReviewList = () => {
  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-3xl font-semibold mb-6">Reviews</h2>

      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h4 className="font-semibold text-xl">Emily</h4>
            ⭐⭐⭐⭐⭐
            <span className="text-gray-500">(4.0)</span>
          </div>

          <p className="text-gray-600">
            Excellent phone with great camera and battery life.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <h4 className="font-semibold text-xl">John</h4>
            ⭐⭐⭐⭐⭐
            <span className="text-gray-500">(4.0)</span>
          </div>

          <p className="text-gray-600">
            Very satisfied with the performance and features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
