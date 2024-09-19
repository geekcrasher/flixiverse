import { useState, useMemo, memo } from "react";
import { ReviewResults } from "@/lib/types";
import { Button } from "@/components/ui/button";
import ReviewItem from "./ReviewItem";
import DataFallback from "@/components/DataFallback";
import Heading from "@/components/Heading";

type ReviewProp = {
  reviews: {
    results: ReviewResults[]
  }
}

const Reviews = memo(({ reviews }: ReviewProp) => {

  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);

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
          <section className="mt-10 space-y-6">
            <Heading title="Reviews" />
            <section className="space-y-4 sm:space-y-0 sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleReviews.map((reviewer) => (
                <ReviewItem
                  key={reviewer.author}
                  authorInfo={reviewer}
                />
              ))}
            </section>

            {visibleReviewsCount < reviews.results.length && (
              <Button
                onClick={showMoreReviews}
                className="flex mt-6 p-2 bg-gray-700 hover:bg-gray-700/70 text-gray-300 hover:text-turquoise text-xs rounded-lg mx-auto"
              >
                Show More
              </Button>
            )}
          </section>
        )
      }
    </>
  );
});

export default Reviews;
