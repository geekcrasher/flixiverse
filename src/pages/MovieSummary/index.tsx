import { useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useMovieDBStore } from "@/store/useMovieDBStore";
import { useMovieStore } from "@/store/useMovieStore";
import { debounce } from "@/util/debounce";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Heading from "@/components/Heading";
import Recommendation from "./Recommendation";
import Reviews from "./Reviews";
import Cast from "./Cast";
import { ArrowLeft, Bookmark, Heart, Star } from "lucide-react";

const MovieSummary = () => {

  const navigate = useNavigate()
  const [duration, setDuration] = useState('')
  const movieFilteredDetails = useMovieDBStore((state) => state.selectedMovieFilteredDetails)

  const movieAddedToWishlist = useMovieStore((state) => state.movieAddedToWishlist)
  const movieAddedToBookmark = useMovieStore((state) => state.movieAddedToBookmark)

  const setAddMovieToWishlist = useMovieStore((state) => state.setAddMovieToWishlist)
  const setAddMovieToBookmark = useMovieStore((state) => state.setAddMovieToBookmark)

  const removeToWishlist = useMovieStore((state) => state.removeToWishlist)
  const removeToBookmark = useMovieStore((state) => state.removeToBookmark)


  const { id, backdrop_path, credits, title, overview, recommendations,
    release_date, reviews, runtime, videos, vote_average, vote_count } = movieFilteredDetails

  useMemo(() => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    setDuration(`${hours}h ${minutes}min`)
  }, [runtime])

  // Check if the current movie is already bookmarked
  const isMovieAddedToWishlist = movieAddedToWishlist.some(
    (wishlistMovie) => wishlistMovie.id === id
  );

  // Check if the current movie is already bookmarked
  const isMovieAddedToBookmark = movieAddedToBookmark.some(
    (bookmarkedMovie) => bookmarkedMovie.id === id
  );

  const debouncedWishlistClick = debounce(() => {
    isMovieAddedToWishlist ? removeToWishlist(id) : setAddMovieToWishlist(movieFilteredDetails)
  })

  const debouncedBookmarkClick = debounce(() => {
    isMovieAddedToBookmark ? removeToBookmark(id) : setAddMovieToBookmark(movieFilteredDetails)
  })

  return (
    <>
      <section className="pt-4 pb-14 space-y-6 px-4 md:px-6 xl:px-10">
        <Button
          className="flex items-center gap-2 text-sm mt-6 rounded-lg p-2 bg-gray-700 text-gray-300"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <section className="flex flex-col">
          <section className="grid space-y-10 xl:space-y-0 xl:grid-cols-5 xl:gap-6">
            <figure className="xl:col-span-3 flex xl:max-w-[900px] rounded-lg overflow-hidden space-y-6 ">
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
                  <Button
                    onClick={debouncedWishlistClick}
                    className="bg-transparent hover:bg-transparent p-0"
                  >
                    <Heart
                      className={`size-6 ${isMovieAddedToWishlist ? 'text-white' : 'text-gray-400'}`}
                      fill={isMovieAddedToWishlist ? "#fff" : "#2b3440"}
                    />
                  </Button>
                  <Button
                    onClick={debouncedBookmarkClick}
                    className="bg-transparent hover:bg-transparent p-0"
                  >
                    <Bookmark
                      className={`size-6 ${isMovieAddedToBookmark ? 'text-white' : 'text-gray-400'}`}
                      fill={isMovieAddedToBookmark ? "#fff" : "#2b3440"}
                    />
                  </Button>
                </section>
              </section>
              <section className="space-y-6">
                <h5 className="text-slate-200 text-lg md:text-xl xl:text-2xl font-semibold">{title}</h5>
                <section className="space-y-4">
                  <section className="flex items-center space-x-4">
                    <p className="text-gray-400 flex items-center space-x-1 ">{duration}</p>
                    <p className="text-gray-400">{release_date ? new Date(release_date).getFullYear() : 'N/A'}</p>
                  </section>
                  <section className="flex flex-wrap items-center gap-3">
                    {movieFilteredDetails.genres.map(genre => (
                      <Badge
                        key={genre.id}
                        className="font-normal text-xs text-gray-300 hover:text-turquoise bg-gray-700 hover:bg-gray-700/70"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </section>
                </section>
              </section>
              <section className="space-y-4">
                <Heading title="Overview" />
                <p className="text-gray-400 text-sm line-clamp-5">{overview}</p>
              </section>
            </section>
          </section>

          <Cast credits={credits} />
          <Recommendation recommendations={recommendations} />
          <Reviews reviews={reviews} />
        </section>
      </section>
    </>
  );
}

export default MovieSummary;