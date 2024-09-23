import { Popcorn } from "lucide-react";

const TrailerNotAvailable = () => {
  return (
    <section className="h-full w-full">
      <section className="flex flex-col items-center justify-center gap-y-10 h-full w-full bg-gray-700">
        <Popcorn className="size-16 md:size-40 text-turquoise" />
        <h2 className="text-gray-400 text-xl md:text-3xl font-semibold font-poppins">
          Trailer not Available
        </h2>
      </section>
    </section>
  );
}

export default TrailerNotAvailable;