import { Suspense } from 'react';
import SkeletonLoading from "@/components/Skeleton";
import SearchMovieResults from "./SearchMovieResults";
import SearchBar from '@/components/SearchBar';

const SearchMovie = () => {
  return (
    <section className="flex items-center flex-wrap gap-4 mt-8">
      <section className='w-full block md:hidden'>
        <SearchBar />
      </section>
      <Suspense fallback={<SkeletonLoading />}>
        <SearchMovieResults />
      </Suspense>
    </section>
  );
}

export default SearchMovie;