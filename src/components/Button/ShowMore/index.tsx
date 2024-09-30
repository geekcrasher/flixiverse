import { memo, useCallback } from "react";
import { debounce } from "@/utils/debounce";
import { Button } from "@/components/ui/button";

type ShowMoreProp = {
  showMoreReviews: () => void
}

const ShowMore = memo(({ showMoreReviews }: ShowMoreProp) => {

  const debounceShowMore = useCallback(debounce(showMoreReviews), [showMoreReviews])

  // const debounceShowMore = useCallback(() => debounce(showMoreReviews), [showMoreReviews]);

  return (
    <Button
      onClick={debounceShowMore}
      className="flex mt-6 p-2 bg-gray-700 hover:bg-gray-700/70 text-gray-300 hover:text-turquoise text-xs rounded-lg mx-auto"
    >
      Show More
    </Button>
  );
})

export default ShowMore;