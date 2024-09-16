import Skeleton from "./Skeleton";

const SkeletonLoading = () => {

  const movieSkelton = Array.from({ length: 9 }, (index: number) => {
    return <Skeleton key={index} />
  });

  return movieSkelton;
}

export default SkeletonLoading;