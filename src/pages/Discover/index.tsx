import { useNavigate } from "react-router-dom";
import { useDiscoverMovies } from "@/hooks/useDiscoverMovies";
import { useMovieDBStore } from "@/store/useMovieDBStore";
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import SearchBar from "@/components/SearchBar";

const Discover = () => {

  const { discoverMovies } = useDiscoverMovies()
  const setSelectedMovieID = useMovieDBStore(state => state.setSelectedMovieID)
  const navigate = useNavigate()

  return (
    <section className="flex flex-col gap-y-8 mt-8 px-4 md:px-6 lg:px-10">
      <section className="w-full block md:hidden">
        <SearchBar />
      </section>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="w-full mx-auto rounded-xl overflow-hidden"
      >
        <CarouselContent>
          {
            discoverMovies && discoverMovies?.results.length > 0 &&
            discoverMovies?.results.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="ml-1 mr-6 basis-full xl:basis-1/2 rounded-lg overflow-hidden"
              >
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-cover bg-no-repeat bg-center "
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
                  }}
                >
                  <section className="bg-black/30 h-full text-slate-100 flex items-center">
                    <section className="w-[24rem] px-10 space-y-4">
                      <h1 className="text-2xl font-semibold">{movie.title}</h1>
                    </section>
                  </section>
                </AspectRatio>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>

      <section className="space-y-2">
        <section className="pb-14">
          <h2 className="text-slate-200 text-lg md:text-2xl font-medium">Movies</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="relative w-full max-w-full mt-4">
            <CarouselContent className="-ml-1">
              {
                discoverMovies && discoverMovies?.results.length > 0 &&
                discoverMovies?.results.map((movie) => (
                  <CarouselItem key={movie.id} className="pl-1 basis-auto mr-6">
                    <Card
                      className=" border-0 cursor-pointer overflow-hidden"
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
                            backgroundColor: `${!movie.poster_path && '#222A33'}`
                          }}
                        >
                          {!movie.poster_path && (
                            <h2 className="font-bold flex text-[#00CDD9] text-2xl opacity-30">
                              flixi
                              <span className="text-[#797D8B]">Verse</span>
                            </h2>)}
                        </figure>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <section className="absolute -bottom-8 right-16">
              <CarouselNext />
              <CarouselPrevious />
            </section>
          </Carousel>
        </section>
        <section className="pb-14">
          <h2 className="text-slate-200 text-lg md:text-2xl font-medium">Movies</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="relative w-full max-w-full mt-4">
            <CarouselContent className="-ml-1">
              {
                discoverMovies && discoverMovies?.results.length > 0 &&
                discoverMovies?.results.map((movie) => (
                  <CarouselItem key={movie.id} className="pl-1 basis-auto mr-6">
                    <Card
                      className=" border-0 cursor-pointer overflow-hidden"
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
                            backgroundColor: `${!movie.poster_path && '#222A33'}`
                          }}
                        >
                          {!movie.poster_path && (
                            <h2 className="font-bold flex text-[#00CDD9] text-2xl opacity-30">
                              flixi
                              <span className="text-[#797D8B]">Verse</span>
                            </h2>)}
                        </figure>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <section className="absolute -bottom-8 right-16">
              <CarouselNext />
              <CarouselPrevious />
            </section>
          </Carousel>
        </section>
      </section>
    </section>
  );
}

export default Discover;