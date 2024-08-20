import { Card, CardContent } from "@/components/ui/card";
import { useMovieDB } from "@/hooks/useMovieDB";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const Discover = () => {

  const { movieList } = useMovieDB()

  return (
    <section className="p-8 space-y-8">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="w-full h-[30rem] mx-auto rounded-xl overflow-hidden"
      >
        <CarouselContent className="">
          {
            movieList && movieList?.results.length > 0 &&
            movieList?.results.map((movie) => (
              <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/3 bg-cover bg-no-repeat bg-center rounded-lg overflow-hidden"
              // style={{
              //   backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`
              // }}
              >
                <img loading="lazy" src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={`${movie.original_title} poster`} className="w-full " />
                {/* <Card className="border-0 w-fit"
                >
                  <CardContent className="p-0" >
                    <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} className="w-full h-[281.25px]" />
                  </CardContent>
                </Card> */}
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
      <section className="space-y-5">
        <h2 className="text-slate-200 text-2xl font-medium">Movies</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          // plugins={[Autoplay({ delay: 4000 })]}
          className="w-full max-w-[92rem]">
          <CarouselContent className="-ml-1">
            {
              movieList && movieList?.results.length > 0 &&
              movieList?.results.map((movie) => (
                <CarouselItem key={movie.id} className="pl-1 md:basis-1/2 lg:basis-auto">
                  <div className="p-1">
                    <Card className="border-0">
                      <CardContent className="flex items-center justify-center p-0 border-0 rounded-lg overflow-hidden">
                        <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} className="w-full h-[250px]" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>

      <section className="space-y-5">
        <h2 className="text-slate-200 text-2xl font-medium">TV Shows</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          // plugins={[Autoplay({ delay: 4000 })]}
          className="w-full">
          <CarouselContent className="-ml-1">
            {
              movieList && movieList?.results.length > 0 &&
              movieList?.results.map((movie) => (
                <CarouselItem key={movie.id} className="pl-1 md:basis-1/2 lg:basis-auto">
                  <div className="p-1">
                    <Card className="border-0">
                      <CardContent className="flex items-center justify-center p-0 border-0 rounded-lg overflow-hidden">
                        <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} className="w-full h-[250px]" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </section>

      <section className="space-y-5">
        <h2 className="text-slate-200 text-2xl font-medium">Anime</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          // plugins={[Autoplay({ delay: 4000 })]}
          className="w-full">
          <CarouselContent className="-ml-1">
            {
              movieList && movieList?.results.length > 0 &&
              movieList?.results.map((movie) => (
                <CarouselItem key={movie.id} className="pl-1 md:basis-1/2 lg:basis-auto">
                  <div className="p-1">
                    <Card className="border-0">
                      <CardContent className="flex items-center justify-center p-0 border-0 rounded-lg overflow-hidden">
                        <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} className="w-full h-[250px]" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </section>

      {/* <section className="grid grid-cols-5 gap-3">
        {
          movieList &&
          movieList.results.length > 0 &&
          movieList.results.map(movie => (
            <Card key={movie.id} className="border-0 w-fit"
            >
              <CardContent className="p-0" >
                <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title} poster`} className="w-full h-[281.25px]" />
              </CardContent>
            </Card>
          ))
        }
      </section> */}


    </section>
  );
}

export default Discover;