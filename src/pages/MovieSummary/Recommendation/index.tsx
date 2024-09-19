import { type MovieCollections } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MovieCards from "./MovieCards";
import Heading from "@/components/Heading";
import DataFallback from "@/components/DataFallback";

type RecommendationProp = {
  recommendations: {
    results: MovieCollections[]
  }
}

const Recommendation = ({ recommendations }: RecommendationProp) => {

  if (recommendations.results?.length === 0) {
    return <DataFallback title="Similar Movies" message="No similar movies available" />
  }

  return (
    <>
      {
        recommendations.results.length > 0 && (
          <section className="mt-10 space-y-6">
            <Heading title="Similar Movies" />
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="relative w-full max-w-full mt-4">
              <CarouselContent className="-ml-1">
                {
                  recommendations.results.map((movie) => (
                    <CarouselItem key={movie.id} className="pl-1 basis-auto mr-6">
                      <MovieCards movie={movie} />
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
            </Carousel>
          </section>
        )
      }
    </>
  );
}

export default Recommendation;