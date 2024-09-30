import {
  type MovieFilteredDetails,
  type TVShowFilteredDetails
} from "@/lib/types";
import { useMovieStore } from "@/store/useMovieStore";
import { debounce } from "@/utils/debounce";

type Collection = {
  id: number
  filteredDetails: MovieFilteredDetails | TVShowFilteredDetails
}

export const useAddToCollection = ({ id, filteredDetails }: Collection) => {
  const addedToWishlist = useMovieStore((state) => state.addedToWishlist)
  const addedToBookmark = useMovieStore((state) => state.addedToBookmark)

  const setAddToWishlist = useMovieStore((state) => state.setAddToWishlist)
  const setAddToBookmark = useMovieStore((state) => state.setAddToBookmark)

  const removeToWishlist = useMovieStore((state) => state.removeFromWishlist)
  const removeToBookmark = useMovieStore((state) => state.removeFromBookmark)

  const isAddedToWishlist = addedToWishlist.some(
    (wishlistItem) => wishlistItem.id === id
  );

  const isAddedToBookmark = addedToBookmark.some(
    (bookmarkedItem) => bookmarkedItem.id === id
  );

  const debouncedWishlistClick = debounce(() => {
    if (id) {
      isAddedToWishlist ? removeToWishlist(id) : setAddToWishlist(filteredDetails)
    }
  })

  const debouncedBookmarkClick = debounce(() => {
    if (id) {
      isAddedToBookmark ? removeToBookmark(id) : setAddToBookmark(filteredDetails)
    }
  })

  return {
    isAddedToWishlist,
    isAddedToBookmark,
    debouncedWishlistClick,
    debouncedBookmarkClick
  }
}