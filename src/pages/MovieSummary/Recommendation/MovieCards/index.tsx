import { useNavigate } from "react-router-dom";
import { useMovieDB } from "@/hooks/useMovieDB";
import { MovieCollections } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";


type MovieCardsProp = {
  movie: MovieCollections
}

const MovieCards = ({ movie }: MovieCardsProp) => {

  const navigate = useNavigate()
  const { setSelectedMovieID } = useMovieDB()

  const { id, title, poster_path } = movie

  return (
    <Card
      className="border-0 cursor-pointer overflow-hidden"
      onClick={() => {
        navigate(`/watch/${id}?title=${title.toLocaleLowerCase()}`)
        setSelectedMovieID(id)
      }}
    >
      <CardContent className="p-0">
        <figure className=" flex items-center justify-center h-40 sm:h-56 w-[106.66px] sm:w-[138.66px]"
          style={{
            background: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: `${!poster_path && '#374151'}`
          }}
        >
          {!poster_path && (
            <h2 className="font-bold flex text-turquoise [font-size:clamp(1.25rem,2.5vw,1.5rem)]">
              flixi
              <span className="text-[#797D8B]">Verse</span>
            </h2>)}
        </figure>
      </CardContent>
    </Card>
  );
}

export default MovieCards;