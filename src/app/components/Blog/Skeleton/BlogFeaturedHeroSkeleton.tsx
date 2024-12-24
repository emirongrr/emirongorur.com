import Skeleton from "react-loading-skeleton";
import SkeletonLoader from "./SkeletonLoader";
import Card from "../BlogCard";

const BlogFeaturedHeroSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className="min-w-[326px]">
        <Skeleton
          height={400}
          containerClassName="flex"
          className="!rounded-xl"
        />
      </Card>
    </SkeletonLoader>
  );
};

export default BlogFeaturedHeroSkeleton;
