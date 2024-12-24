import Skeleton from "react-loading-skeleton";
import SkeletonLoader from "./SkeletonLoader";
import Card from "../BlogCard";

const BlogCardNewSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className="min-w-[326px]">
        <Skeleton
          height={398}
          containerClassName="flex"
          className="!rounded-xl"
        />
      </Card>
    </SkeletonLoader>
  );
};

export default BlogCardNewSkeleton;
