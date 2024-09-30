import { useTrendingDetails } from "@/hooks/useTrendingDetails";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { isMovie } from "@/lib/typeGuards/guards";
import { useHandleNavigation } from "@/hooks/useHandleNavigation";

const Trending = () => {
  const { trendingDetails } = useTrendingDetails()
  const { handleNavigation } = useHandleNavigation()

  if (trendingDetails?.results.length === 0) {
    return <p>No trending details</p>
  }

  return (
    <>
      <section className="flex flex-wrap items-center gap-4 p-14 ">

        {
          trendingDetails?.results.map(collection => (
            <Card
              key={collection.id}
              className="border-0 cursor-pointer overflow-hidden w-fit bg-transparent"
              onClick={() => handleNavigation(collection)}
            >
              <CardContent className="p-0">
                <figure className="w-28 sm:w-36 h-auto space-y-5">
                  <AspectRatio
                    ratio={4 / 6}
                    className={`flex items-center justify-center rounded-lg overflow-hidden ${!collection.poster_path ? 'bg-[#374151]' : null}`}
                  >
                    {
                      collection.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${collection.poster_path}`}
                          alt={`${isMovie(collection) ? collection.title : collection.name} poster path`}
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
                  <figcaption className="truncate font-medium text-sm sm:text-base text-gray-400">
                    {isMovie(collection) ? collection.title : collection.name}
                  </figcaption>
                </figure>
              </CardContent>
            </Card>
          ))
        }
      </section>
    </>
  );
}

export default Trending;