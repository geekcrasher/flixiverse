import { useMovieDB } from "@/hooks/useMovieDB";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const SearchMovieResults = () => {

  const { searchResults } = useMovieDB()

  return (
    <>
      {
        searchResults && searchResults.results.map(movie => (
          <Card key={movie.id} className="overflow-hidden border-0 flex hover:cursor-pointer">
            <CardContent className="p-0" >
              <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} className="w-full h-[281.25px]" />
            </CardContent>
          </Card>
        ))
      }
    </>
  );
}

export default SearchMovieResults;