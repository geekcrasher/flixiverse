import { useState, useMemo, memo } from "react";
import { useMovieFilteredDetails } from "@/hooks/useMovieFilteredDetails";
import ReviewItem from "@/components/ReviewItem";
import DataFallback from "@/components/DataFallback";
import Heading from "@/components/Heading";
import ShowMore from "@/components/Button/ShowMore";


const Reviews = memo(() => {

  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);
  const { movieFilteredDetails } = useMovieFilteredDetails()
  const { reviews } = movieFilteredDetails

  const showMoreReviews = () => {
    setVisibleReviewsCount(prevCount => prevCount + 3);
  };

  // Filter out duplicate reviews by `author`
  const uniqueReviews = reviews.results.filter(
    (review, index, self) =>
      index === self.findIndex((r) => r.author === review.author)
  );

  const visibleReviews = useMemo(() => (
    uniqueReviews.slice(0, visibleReviewsCount)
  ), [uniqueReviews, visibleReviewsCount]);

  if (reviews.results.length === 0) {
    return <DataFallback title="Reviews" message="No reviews available." />
  }

  return (
    <>
      {
        reviews.results.length > 0 && (
          <section className="mt-12 space-y-6">
            <Heading title="Reviews" />
            <section className="space-y-4 sm:space-y-0 sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleReviews.map((reviewer) => (
                <ReviewItem
                  key={reviewer.author}
                  authorInfo={reviewer}
                />
              ))}
            </section>

            {visibleReviewsCount < reviews.results.length &&
              <ShowMore showMoreReviews={showMoreReviews} />
            }
          </section>
        )
      }
    </>
  );
});

export default Reviews;
