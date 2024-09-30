import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type PosterCardProp = {
  titleOfShow: string
  poster_path: string
}

const PosterCard = memo(({ titleOfShow, poster_path }: PosterCardProp) => {
  return (
    <Card className="border-0 cursor-pointer overflow-hidden bg-transparent">
      <CardContent className="p-0 w-28 sm:w-36 h-auto space-y-5">
        <AspectRatio
          ratio={4 / 6}
          className={`flex items-center justify-center rounded-lg overflow-hidden ${!poster_path ? 'bg-[#374151]' : null}`}
        >
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={`${titleOfShow} poster path`}
              className="w-full h-full object-cover"
            />
          ) : (
            <h2 className="font-bold flex text-turquoise [font-size:clamp(1.25rem,2.5vw,1.5rem)]">
              flixi
              <span className="text-[#797D8B]">Verse</span>
            </h2>
          )
          }
        </AspectRatio>
        <h6 className="truncate font-medium text-sm sm:text-base text-gray-400">
          {titleOfShow}
        </h6>
      </CardContent>
    </Card>
  );
})

export default PosterCard;