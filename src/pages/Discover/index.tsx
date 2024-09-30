import { Link } from "react-router-dom";
import { useDiscoverMovies } from "@/hooks/useDiscoverMovies";
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SearchBar from "@/components/SearchBar";
import PosterCard from "@/components/Cards/PosterCard";

const Discover = () => {

  const { discoverMovies } = useDiscoverMovies()

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
                discoverMovies?.results.map(({ id, title, poster_path }) => (
                  <CarouselItem key={id} className="pl-1 basis-auto mr-6">
                    <Link to={`/movie/watch/${id}?title=${title.toLocaleLowerCase()}`}>
                      <PosterCard
                        titleOfShow={title}
                        poster_path={poster_path}
                      />
                    </Link>
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
                discoverMovies?.results.map(({ id, title, poster_path }) => (
                  <CarouselItem key={id} className="pl-1 basis-auto mr-6">
                    <Link to={`/movie/watch/${id}?title=${title.toLocaleLowerCase()}`}>
                      <PosterCard
                        titleOfShow={title}
                        poster_path={poster_path}
                      />
                    </Link>
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