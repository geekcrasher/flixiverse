import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { useDiscoverMovies } from "@/hooks/useDiscoverMovies";

const DiscoverMovies = () => {

  const { movieList } = useDiscoverMovies()

  return (
    <>
      {movieList && movieList.map(movie => (
        <Card key={movie.id} className="overflow-hidden border-0 flex hover:cursor-pointer">
          <CardContent className="p-0" >
            <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} className="w-full h-[281.25px]" />
            {/* <div className="w-[187.5px] h-[281.25px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>
            </div> */}
          </CardContent>
        </Card>

      ))}
    </>
  );
}

export default DiscoverMovies;