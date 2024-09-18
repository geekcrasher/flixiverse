import { useNavigate } from "react-router-dom";
import { useMovieDB } from "@/hooks/useMovieDB";
import { useSearchDetails } from "@/hooks/useSearchDetails";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const SearchMovieResults = () => {

  const { setSelectedMovieID } = useMovieDB()
  const searchResults = useSearchDetails()
  const navigate = useNavigate()

  return (
    <>
      {
        searchResults && searchResults.results.map(movie => (
          <Card
            key={movie.id}
            className="overflow-hidden border-0 hover:cursor-pointer"
            onClick={() => {
              navigate(`/watch/${movie.id}?title=${movie.title.toLocaleLowerCase()}`)
              setSelectedMovieID(movie.id)
            }}
          >
            <CardContent className="p-0" >
              <figure className=" flex items-center justify-center h-64 w-[170.66px]"
                style={{
                  background: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: `${!movie.poster_path && '#222A33'}`
                }}
              >
                {!movie.poster_path && (
                  <h2 className="font-bold flex text-[#00CDD9] text-2xl opacity-40">
                    flixi
                    <span className="text-[#797D8B]">Verse</span>
                  </h2>)}
              </figure>
            </CardContent>
          </Card>
        ))
      }
    </>
  );
}

export default SearchMovieResults;