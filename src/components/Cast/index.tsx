import { memo } from "react";
import { type Credit } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Heading from "@/components/Heading";
import { UserRound } from "lucide-react";

type CastProp = {
  credits: Credit
}

const Cast = memo(({ credits }: CastProp) => {
  return (
    <>
      {
        credits.cast.length > 0 && (
          <section className="flex flex-col space-y-8 mt-12">
            <Heading title="Top Cast" />
            <Carousel
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full max-w-full mt-4">
              <CarouselContent className="-ml-1">
                {credits.cast.slice(0, 20).map((cast) => {
                  const name = cast.character.split(' (voice)')[0].split(' / ')[0]
                  return (
                    <CarouselItem key={cast.id} className="pl-1 basis-auto mr-4">
                      <section className="flex items-center space-x-4 bg-petrol p-4 rounded-md">
                        <Avatar className="size-12 sm:size-14 rounded-full overflow-hidden cursor-pointer opacity-90">
                          <AvatarImage
                            src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                            className="h-full w-full bg-cover bg-no-repeat bg-center"
                            alt={`${cast.name || 'Actor'} profile image`}
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
                })}
              </CarouselContent>
              <CarouselNext className="bg-gray-600 -right-3" />
              <CarouselPrevious className="bg-gray-600 -left-3" />
            </Carousel>
          </section >
        )
      }
    </>
  );
})

export default Cast;