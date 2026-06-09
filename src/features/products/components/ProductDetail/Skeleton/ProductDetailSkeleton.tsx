import { Skeleton } from "antd";

const ProductDetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10">
      <div>
        <div className="bg-white rounded-xl p-6 ">
          <Skeleton.Image active className="!w-full !h-[450px]" />
        </div>

        <div className="flex gap-3 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton.Image key={item} active className="!w-20 !h-20" />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <Skeleton.Input active block size="large" />
        <Skeleton.Input active style={{ width: 180 }} />
        <Skeleton.Input active style={{ width: 250 }} />

        <div className="space-y-3">
          <Skeleton.Input active style={{ width: 220 }} />
          <Skeleton.Input active style={{ width: 200 }} />
          <Skeleton.Input active style={{ width: 180 }} />
        </div>

        <Skeleton active paragraph={{ rows: 4 }} />

        <div className="space-y-5">
          {[1, 2].map((item) => (
            <Skeleton key={item} active avatar paragraph={{ rows: 2 }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
