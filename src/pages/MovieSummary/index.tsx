import { useMemo } from "react";
import { useMovieFilteredDetails } from "@/hooks/useMovieFilteredDetails";
import { useMovieStore } from "@/store/useMovieStore";
import { debounce } from "@/utils/debounce";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import Recommendation from "./Recommendation";
import Reviews from "./Reviews";
import Cast from "./Cast";
import BackdropCard from "@/components/Cards/BackdropCard";
import MovieMetaData from "./MovieMetaData";
import Share from "@/components/Dialog/Share";
import TrailerAction from "@/components/Dialog/TrailerAction";
import BackButton from "@/components/Button/BackButton";
import { Bookmark, Star } from "lucide-react";

const MovieSummary = () => {

  const movieAddedToWishlist = useMovieStore((state) => state.movieAddedToWishlist)
  const movieAddedToBookmark = useMovieStore((state) => state.movieAddedToBookmark)

  const setAddMovieToWishlist = useMovieStore((state) => state.setAddMovieToWishlist)
  const setAddMovieToBookmark = useMovieStore((state) => state.setAddMovieToBookmark)

  const removeToWishlist = useMovieStore((state) => state.removeToWishlist)
  const removeToBookmark = useMovieStore((state) => state.removeToBookmark)

  const { movieFilteredDetails } = useMovieFilteredDetails()

  const { id, backdrop_path, title, overview,
    release_date, runtime, vote_average, vote_count, videos } = movieFilteredDetails

  const formattedDuration = useMemo(() => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`
  }, [runtime])

  const isMovieAddedToWishlist = movieAddedToWishlist.some(
    (wishlistMovie) => wishlistMovie.id === id
  );

  const isMovieAddedToBookmark = movieAddedToBookmark.some(
    (bookmarkedMovie) => bookmarkedMovie.id === id
  );

  const debouncedWishlistClick = debounce(() => {
    if (id) {
      isMovieAddedToWishlist ? removeToWishlist(id) : setAddMovieToWishlist(movieFilteredDetails)
    }
  })

  const debouncedBookmarkClick = debounce(() => {
    if (id) {
      isMovieAddedToBookmark ? removeToBookmark(id) : setAddMovieToBookmark(movieFilteredDetails)
    }
  })

  return (
    <section className="relative w-auto">
      <section className="w-full flex xl:hidden items-center justify-center">
        <section className="fixed z-50 bottom-0 w-[98vw] lg:w-[89vw] py-6 bg-neutral/30 backdrop-blur-sm">
          <TrailerAction
            videos={videos}
            debouncedWishlistClick={debouncedWishlistClick}
            isMovieAddedToWishlist={isMovieAddedToWishlist}
            className="w-full"
          />
        </section>
      </section>
      <section className="pt-4 pb-32 space-y-6 px-4 md:px-6 xl:px-10 xl:pb-14">
        <BackButton />
        <section className="flex flex-col">
          <section className="grid space-y-10 xl:space-y-0 xl:grid-cols-5 xl:gap-14">
            <BackdropCard
              backdrop_path={backdrop_path}
              title={title}
            />
            <section className="flex flex-col gap-10 xl:col-span-2">
              <section className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-gray-200 font-medium">
                  <Star color="#FFC30E" fill="#FFC30E" className="size-6" />
                  {vote_average.toFixed(1)}
                  <span className="font-normal text-sm text-gray-400"> | {vote_count}</span>
                </p>
                <section className="space-x-6">
                  <Share />
                  <Button
                    onClick={debouncedBookmarkClick}
                    className="bg-transparent hover:bg-transparent p-0"
                  >
                    <span className="sr-only">Bookmark</span>
                    <Bookmark
                      className={`size-6 ${isMovieAddedToBookmark ? 'text-white' : 'text-gray-400'}`}
                      fill={isMovieAddedToBookmark ? "#fff" : "#222A33"}
                    />
                  </Button>
                </section>
              </section>
              <section className="space-y-6">
                <h2 className="font-roboto font-semibold text-slate-200 text-2xl lg:text-3xl">{title}</h2>
                <section className="space-y-6">
                  <section className="flex items-center space-x-4">
                    <p className="text-gray-400 flex items-center space-x-1 ">{formattedDuration}</p>
                    <p className="text-gray-400">{release_date ? new Date(release_date).getFullYear() : 'N/A'}</p>
                  </section>
                  <section className="flex flex-wrap items-center gap-3">
                    {movieFilteredDetails.genres.map(genre => (
                      <Badge
                        key={genre.id}
                        className="font-normal text-sm text-gray-300 hover:text-turquoise bg-gray-700 hover:bg-gray-700/70"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </section>
                </section>
              </section>
              <section className="space-y-4">
                <Heading title="Overview" />
                <p className="text-gray-400 text-base line-clamp-6">{overview}</p>
              </section>

              <TrailerAction
                videos={videos}
                debouncedWishlistClick={debouncedWishlistClick}
                isMovieAddedToWishlist={isMovieAddedToWishlist}
                className="hidden xl:flex"
              />

              <MovieMetaData className="xl:hidden mt-4" />

            </section>
          </section>

          <Cast />
          <Recommendation />
          <MovieMetaData className="hidden xl:block mt-12" />
          <Reviews />
        </section>
      </section>
    </section>
  );
}

export default MovieSummary;