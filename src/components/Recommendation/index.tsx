import { memo } from "react";
import { Link } from "react-router-dom";
import {
  type MovieRecommendationResult,
  type TVRecommendationResult
} from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Heading from "@/components/Heading";
import DataFallback from "@/components/DataFallback";
import PosterCard from "@/components/Cards/PosterCard";

type RecommendationProp = {
  recommendations: MovieRecommendationResult | TVRecommendationResult
}

const Recommendation = memo(({ recommendations }: RecommendationProp) => {

  if (recommendations.results?.length === 0) {
    return <DataFallback title="Recommendation" message="No recommendation available" />
  }

  return (
    <>
      {
        recommendations.results.length > 0 && (
          <section className="mt-12 space-y-6">
            <Heading title="Recommendation" />
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full max-w-full mt-4">
              <CarouselContent className="-ml-1">
                {
                  recommendations.results.map(({ id, media_type, poster_path, ...rest }) => {

                    const titleOfShow = 'name' in rest ? rest.name : rest.title

                    return (
                      <CarouselItem key={id} className="pl-1 basis-auto mr-6">
                        <Link to={`/${media_type}/watch/${id}?title=${titleOfShow.toLocaleLowerCase()}`}>
                          <PosterCard
                            titleOfShow={titleOfShow}
                            poster_path={poster_path}
                          />
                        </Link>
                      </CarouselItem>
                    )
                  })
                }
              </CarouselContent>
            </Carousel>
          </section>
        )
      }
    </>
  );
})

export default Recommendation;