import { memo } from "react";
import { useMovieFilteredDetails } from "@/hooks/useMovieFilteredDetails";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import DataFallback from "@/components/DataFallback";
import Heading from "@/components/Heading";
import { UserRound } from "lucide-react";

const Cast = memo(() => {

  const { movieFilteredDetails } = useMovieFilteredDetails()
  const { credits } = movieFilteredDetails

  if (credits.cast.length === 0) {
    return <DataFallback title="Top Cast" message="No cast available" />
  }

  return (
    <>
      {
        credits.cast.length > 0 && (
          <figure className="flex flex-col space-y-8 mt-10">
            <Heading title="Top Cast" />
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="relative w-full max-w-full mt-4">
              <CarouselContent className="-ml-1">
                {
                  credits.cast.slice(0, 20).map((cast) => {

                    const name = cast.character.split(' (voice)')[0].split(' / ')[0]

                    return (
                      <CarouselItem key={cast.id} className="pl-1 basis-auto mr-4">
                        <section className="flex items-center space-x-4 bg-gray-700 p-4 rounded-md">
                          <Avatar className="size-12 sm:size-14 rounded-full overflow-hidden cursor-pointer opacity-90">
                            <AvatarImage
                              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                              className="h-full w-full bg-cover bg-no-repeat bg-center" alt={`${cast.name}'s profile`}
                            />
                            <AvatarFallback className="bg-gray-600">
                              <UserRound className="size-5 text-gray-400" />
                            </AvatarFallback>
                          </Avatar>
                          <section className="space-y-1">
                            <p className="text-turquoise font-medium text-sm">{cast.name}</p>
                            <p className="text-gray-300 text-sm">{name}</p>
                          </section>
                        </section>
                      </CarouselItem>
                    )
                  })
                }
              </CarouselContent>
            </Carousel>
          </figure >
        )
      }
    </>
  );
})

export default Cast;