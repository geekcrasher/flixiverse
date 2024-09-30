import { useAddToCollection } from "@/hooks/useAddToCollection";
import { useTVFilteredDetails } from "@/hooks/useTVFilteredDetails";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Share from "@/components/Dialog/Share";
import BackButton from "@/components/Button/BackButton";
import Heading from "@/components/Heading";
import TrailerAction from "@/components/Dialog/TrailerAction";
import BackdropCard from "@/components/Cards/BackdropCard";
import VoteAverage from "@/components/VoteAverage";
import MoreDetails from "@/components/Details";
import Cast from "@/components/Cast";
import Recommendation from "@/components/Recommendation";
import Reviews from "@/components/Review";
import { Bookmark, ExternalLink } from "lucide-react";

const TVShowSummary = () => {

  const { tvFilteredDetails } = useTVFilteredDetails()
  const {
    id,
    name,
    credits,
    backdrop_path,
    videos,
    first_air_date,
    tagline, status,
    overview,
    vote_average,
    vote_count,
    production_companies,
    production_countries,
    spoken_languages,
    recommendations,
    reviews
  } = tvFilteredDetails

  const {
    isAddedToWishlist,
    isAddedToBookmark,
    debouncedBookmarkClick,
    debouncedWishlistClick
  } = useAddToCollection({ id, filteredDetails: tvFilteredDetails })

  return (
    <section className="relative w-auto">
      <section className="w-full flex xl:hidden items-center justify-center">
        <section className="fixed z-50 bottom-0 w-[98vw] lg:w-[89vw] py-6 bg-neutral/30 backdrop-blur-sm">
          <TrailerAction
            videos={videos}
            debouncedWishlistClick={debouncedWishlistClick}
            isAddedToWishlist={isAddedToWishlist}
            className="w-full"
          />
        </section>
      </section>
      <section className="pt-4 pb-32 space-y-6 px-4 md:px-6 xl:px-10 xl:pb-14">
        <BackButton />
        <section className="flex flex-col">
          <section className="grid space-y-10 xl:space-y-0 xl:grid-cols-5 xl:gap-14">
            <BackdropCard
              backdrop_path={backdrop_path}
              title={name}
            />
            <section className="flex flex-col gap-10 xl:col-span-2">
              <section className="flex items-center justify-between">
                <VoteAverage
                  voteAverage={vote_average}
                  voteCount={vote_count}
                />
                <section className="flex items-center space-x-6">
                  <Share />
                  <Button
                    onClick={debouncedBookmarkClick}
                    className="bg-transparent hover:bg-transparent p-0"
                  >
                    <span className="sr-only">Bookmark</span>
                    <Bookmark
                      className={`size-6 ${isAddedToBookmark ? 'text-white' : 'text-gray-400'}`}
                      fill={isAddedToBookmark ? "#fff" : "#222A33"}
                    />
                  </Button>
                </section>
              </section>
              <section className="space-y-6">
                <h2 className="font-roboto font-semibold text-slate-200 text-2xl lg:text-3xl">{name}</h2>
                <section className="space-y-6">
                  <section className="flex items-center space-x-4">
                    {/* <p className="text-gray-400 flex items-center space-x-1 ">{formattedDuration}</p> */}
                    <p className="text-gray-400">{first_air_date ? new Date(first_air_date).getFullYear() : 'N/A'}</p>
                  </section>
                  <section className="flex flex-wrap items-center gap-3">
                    {tvFilteredDetails.genres.map(genre => (
                      <Badge
                        key={genre.id}
                        className="font-normal text-sm text-gray-300 hover:text-turquoise bg-gray-700 hover:bg-gray-700/70"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </section>
                </section>
              </section>
              <section className="space-y-4">
                <Heading title="Overview" />
                <p className="text-gray-400 text-base line-clamp-6">{overview}</p>
              </section>

              <TrailerAction
                videos={videos}
                debouncedWishlistClick={debouncedWishlistClick}
                isAddedToWishlist={isAddedToWishlist}
                className="hidden xl:flex"
              />

              <MoreDetails
                tagline={tagline}
                release_date={first_air_date}
                status={status}
                production_countries={production_countries}
                production_companies={production_companies}
                spoken_languages={spoken_languages}
                className="xl:hidden mt-4"
              />

            </section>
          </section>

          <Cast credits={credits} />
          <Recommendation recommendations={recommendations} />
          <MoreDetails
            tagline={tagline}
            release_date={first_air_date}
            status={status}
            production_countries={production_countries}
            production_companies={production_companies}
            spoken_languages={spoken_languages}
            className="hidden xl:block mt-12"
          />
          <Reviews reviews={reviews} />
        </section>
      </section>
    </section>
  );
}

export default TVShowSummary;