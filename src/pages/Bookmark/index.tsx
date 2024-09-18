import { useNavigate } from "react-router-dom";
import { useMovieDB } from "@/hooks/useMovieDB";
import { useMovieStore } from "@/store/useMovieStore";
import { Card, CardContent } from "@/components/ui/card";


const Bookmark = () => {
  const { setSelectedMovieID } = useMovieDB()
  const movieAddedToBookmark = useMovieStore((state) => state.movieAddedToBookmark)
  const navigate = useNavigate()

  if (movieAddedToBookmark.length === 0) {
    return <h1 className="text-white">No Bookmark movies</h1>
  }


  return (
    <>
      <section className="flex items-center gap-4 p-14">
        {
          movieAddedToBookmark.length > 0 &&
          movieAddedToBookmark.map((movie) => (
            <Card
              className="border-0 cursor-pointer overflow-hidden w-fit"
              onClick={() => {
                navigate(`/watch/${movie.id}?title=${movie.title.toLocaleLowerCase()}`)
                setSelectedMovieID(movie.id)
              }}
            >
              <CardContent className="p-0">
                <figure className=" flex items-center justify-center h-40 sm:h-56 w-[106.66px] sm:w-[138.66px]"
                  style={{
                    background: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: `${!movie.poster_path && '#374151'}`
                  }}
                >
                  {!movie.poster_path && (
                    <h2 className="font-bold flex text-turquoise [font-size:clamp(1.25rem,2.5vw,1.5rem)]">
                      flixi
                      <span className="text-[#797D8B]">Verse</span>
                    </h2>)}
                </figure>
              </CardContent>
            </Card>
          ))
        }
      </section>
    </>
  );
}

export default Bookmark;