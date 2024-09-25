import { useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { useMovieFilteredDetails } from "@/hooks/useMovieFilteredDetails";
import { useMovieStore } from "@/store/useMovieStore";
import { debounce } from "@/utils/debounce";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Heading from "@/components/Heading";
import Recommendation from "./Recommendation";
import Reviews from "./Reviews";
import Cast from "./Cast";
import ShareContent from "./ShareContent";
import MovieActions from "./MovieActions";
import { ArrowLeft, Bookmark, Star } from "lucide-react";
import MovieMetaData from "./MovieMetaData";

const MovieSummary = () => {

  const navigate = useNavigate()

  const movieAddedToWishlist = useMovieStore((state) => state.movieAddedToWishlist)
  const movieAddedToBookmark = useMovieStore((state) => state.movieAddedToBookmark)

  const setAddMovieToWishlist = useMovieStore((state) => state.setAddMovieToWishlist)
  const setAddMovieToBookmark = useMovieStore((state) => state.setAddMovieToBookmark)

  const removeToWishlist = useMovieStore((state) => state.removeToWishlist)
  const removeToBookmark = useMovieStore((state) => state.removeToBookmark)

  const { movieFilteredDetails } = useMovieFilteredDetails()

  const { id, backdrop_path, title, overview,
    release_date, runtime, vote_average, vote_count } = movieFilteredDetails

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
          <MovieActions
            debouncedWishlistClick={debouncedWishlistClick}
            isMovieAddedToWishlist={isMovieAddedToWishlist}
            className="w-full"
          />
        </section>
      </section>
      <section className="pt-4 pb-32 space-y-6 px-4 md:px-6 xl:px-10 xl:pb-14">
        <Button
          className="flex items-center gap-2 text-sm mt-6 rounded-lg p-2 bg-gray-700 hover:bg-gray-700/70 text-gray-300 hover:text-turquoise"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <section className="flex flex-col">
          <section className="grid space-y-10 xl:space-y-0 xl:grid-cols-5 xl:gap-14">
            <figure className="xl:col-span-3 flex xl:max-w-full rounded-lg overflow-hidden space-y-6 ">
              <AspectRatio ratio={16 / 9} className="flex items-center justify-center bg-gray-700">
                {
                  backdrop_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                      alt={`${title} backdrop image`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <h2 className="font-bold flex text-turquoise [font-size:clamp(1.5rem,2.5vw,2.25rem)] ">
                      flixi
                      <span className="text-[#797D8B]">Verse</span>
                    </h2>
                  )
                }
              </AspectRatio>
            </figure>
            <section className="flex flex-col gap-6 xl:col-span-2">
              <section className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-gray-200 font-medium">
                  <Star color="#FFC30E" fill="#FFC30E" className="size-6" />
                  {vote_average.toFixed(1)}
                  <span className="font-normal text-sm text-gray-400"> | {vote_count}</span>
                </p>
                <section className="space-x-6">
                  <ShareContent />
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
              <section className="space-y-10">
                <section className="space-y-4">
                  <Heading title="Overview" />
                  <p className="text-gray-400 text-base line-clamp-6">{overview}</p>
                </section>
              </section>

              <MovieActions
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