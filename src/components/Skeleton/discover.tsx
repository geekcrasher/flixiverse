import { Skeleton } from "@/components/ui/skeleton"
import SkeletonLoading from ".";

const DiscoverSkeleton = () => {
  return (
    <div className="px-2 md:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-4">
        <Skeleton className="h-[24rem] w-full bg-[#222a33]/70 rounded-lg" />
        <Skeleton className="hidden xl:flex h-[24rem] w-full bg-[#222a33]/60 rounded-lg" />
      </div>

      <div className="flex gap-3 mt-8">
        <SkeletonLoading />
      </div>
    </div>
  );
}

export default DiscoverSkeleton;