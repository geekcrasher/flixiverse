import { useMovieFilteredDetails } from "@/hooks/useMovieFilteredDetails";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import TrailerNotAvailable from "./TrailerNotAvailable";
import { Heart, Play } from "lucide-react";

type MovieActionsProps = {
  debouncedWishlistClick: () => void
  isMovieAddedToWishlist: boolean
  className?: string
}

const MovieActions = ({ debouncedWishlistClick, isMovieAddedToWishlist, className }: MovieActionsProps) => {

  const { movieFilteredDetails } = useMovieFilteredDetails()
  const { videos } = movieFilteredDetails

  const filteredVideo = videos.results.find((video) => video.name.startsWith("Official Trailer"))

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
        <DialogContent className="md:max-w-[900px] xl:max-w-[1100px] p-0 border-0 bg-transparent">
          <AspectRatio ratio={16 / 9}>
            {
              videos.results.length > 0 ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={filteredVideo ? `https://www.youtube.com/embed/${filteredVideo.key}` : `https://www.youtube.com/embed/${videos.results[0].key}`
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
        className={`w-full h-14 bg-gray-700 hover:bg-gray-700/70 ${isMovieAddedToWishlist ? 'text-turquoise' : 'text-gray-400'}`}
      >
        <Heart
          className={`size-6 mr-2 ${isMovieAddedToWishlist ? 'text-turquoise' : 'text-gray-400'}`}
          fill={isMovieAddedToWishlist ? "#00cdd9" : "#374151"}
        />
        {isMovieAddedToWishlist ? 'Added to Watchlist' : 'Add to Watchlist'}
      </Button>
    </section>
  );
}

export default MovieActions;