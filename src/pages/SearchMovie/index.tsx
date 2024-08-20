import { Suspense } from 'react';
import SkeletonLoading from "@/components/Skeleton";
import SearchMovieResults from "./SearchMovieResults";

const SearchMovie = () => {
  return (
    <section className="flex items-center flex-wrap gap-4 mt-8">
      <Suspense fallback={<SkeletonLoading />}>
        <SearchMovieResults />
      </Suspense>
    </section>
  );
}

export default SearchMovie;