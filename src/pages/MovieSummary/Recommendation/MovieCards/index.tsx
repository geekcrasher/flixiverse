import { useNavigate } from "react-router-dom";
import { useMovieDB } from "@/hooks/useMovieDB";
import { MovieCollections } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";


type MovieCardsProp = {
  movie: MovieCollections
}

const MovieCards = ({ movie }: MovieCardsProp) => {

  const navigate = useNavigate()
  const { setSelectedMovieID } = useMovieDB()

  const { id, title, poster_path } = movie

  return (
    <Card
      className="border-0 cursor-pointer overflow-hidden bg-transparent"
      onClick={() => {
        navigate(`/movie/watch/${id}?title=${title.toLocaleLowerCase()}`)
        setSelectedMovieID(id)
      }}
    >
      <CardContent className="p-0">
        <figure className="w-28 sm:w-36 h-auto space-y-5">
          <AspectRatio
            ratio={4 / 6}
            className={`flex items-center justify-center rounded-lg overflow-hidden ${!poster_path ? 'bg-[#374151]' : null}`}
          >
            {
              poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={`${title} poster path`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <h2 className="font-bold flex text-turquoise [font-size:clamp(1.25rem,2.5vw,1.5rem)]">
                  flixi
                  <span className="text-[#797D8B]">Verse</span>
                </h2>
              )
            }
          </AspectRatio>
          <figcaption className="truncate font-medium text-sm sm:text-base text-gray-400">
            {title}
          </figcaption>
        </figure>
      </CardContent>
    </Card>
  );
}

export default MovieCards;