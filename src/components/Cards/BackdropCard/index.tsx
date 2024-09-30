import { AspectRatio } from "@/components/ui/aspect-ratio";

type BackdropCardProp = {
  backdrop_path: string
  title: string
}

const BackdropCard = ({ backdrop_path, title }: BackdropCardProp) => {
  return (
    <figure className="xl:col-span-3 flex xl:max-w-full rounded-lg overflow-hidden space-y-6 ">
      <AspectRatio ratio={16 / 9} className="flex items-center justify-center bg-gray-700">
        {
          backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
              alt={`${title} backdrop image`}
              className="h-full w-full object-cover"
            />
          ) : (
            <h2 className="font-bold flex text-turquoise [font-size:clamp(1.5rem,2.5vw,2.25rem)] ">
              flixi
              <span className="text-[#797D8B]">Verse</span>
            </h2>
          )
        }
      </AspectRatio>
    </figure>
  );
}

export default BackdropCard;