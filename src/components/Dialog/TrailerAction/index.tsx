import { memo } from "react";
import { cn } from "@/lib/utils";
import { type VideoResult } from '@/lib/types'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TrailerNotAvailable from "./TrailerNotAvailable";
import { Play, Heart } from "lucide-react";


type TrailerActionProp = {
  videos: VideoResult
  debouncedWishlistClick: () => void
  isAddedToWishlist: boolean
  className?: string
}

const TrailerAction = memo(({
  videos,
  debouncedWishlistClick,
  isAddedToWishlist,
  className
}: TrailerActionProp) => {

  const filteredVideo = videos.results.find((video) => {
    video.name.startsWith("Official Trailer") && video.type === 'Trailer'
  })

  return (
    <section className={cn("flex items-center gap-6 xl:mt-12", className)}>
      <Dialog>
        <DialogTrigger className="w-full">
          <Button
            className="w-full h-14 bg-turquoise text-white hover:bg-turquoise/90 hover:text-white space-x-3">
            <Play className="size-6 mr-2" />
            Watch Trailer
          </Button>
        </DialogTrigger>
        <DialogContent
          className="md:max-w-[900px] xl:max-w-[1100px] p-0 border-0 bg-transparent"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Trailer</DialogTitle>
          <AspectRatio ratio={16 / 9}>
            {
              videos.results.length > 0 ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={filteredVideo ?
                    `https://www.youtube.com/embed/${filteredVideo.key}` :
                    `https://www.youtube.com/embed/${videos.results[0].key}`
                  }
                  title={`${filteredVideo?.name}`}
                  allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <TrailerNotAvailable />
              )
            }
          </AspectRatio>
        </DialogContent>
      </Dialog>

      <Button
        onClick={debouncedWishlistClick}
        className={`w-full h-14 bg-petrol hover:bg-petrol/80 ${isAddedToWishlist ? 'text-turquoise' : 'text-gray-400'}`}
      >
        <Heart
          className={`size-6 mr-2 ${isAddedToWishlist ? 'text-turquoise' : 'text-gray-400'}`}
          fill={isAddedToWishlist ? "#00cdd9" : "#293441"}
        />
        {isAddedToWishlist ? 'Added to Watchlist' : 'Add to Watchlist'}
      </Button>
    </section>
  );
})

export default TrailerAction;