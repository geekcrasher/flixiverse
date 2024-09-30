import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { type TVShowFilteredDetails, type MovieFilteredDetails } from "@/lib/types";

type State = {
  addedToWishlist: (MovieFilteredDetails | TVShowFilteredDetails)[]
  addedToBookmark: (MovieFilteredDetails | TVShowFilteredDetails)[]
}

type Action = {
  setAddToWishlist: (value: MovieFilteredDetails | TVShowFilteredDetails) => void
  setAddToBookmark: (value: MovieFilteredDetails | TVShowFilteredDetails) => void
  removeFromWishlist: (id: number) => void;
  removeFromBookmark: (id: number) => void;
}

export const useMovieStore = create<State & Action>()(
  persist(
    (set) => ({
      addedToWishlist: [],
      addedToBookmark: [],

      setAddToWishlist: (value) => set((state) => ({
        addedToWishlist: [...state.addedToWishlist, value]
      })),
      setAddToBookmark: (value) => set((state) => ({
        addedToBookmark: [...state.addedToBookmark, value]
      })),


      removeFromWishlist: (id) => set((state) => ({
        addedToWishlist: state.addedToWishlist.filter(movie => movie.id !== id)
      })),
      removeFromBookmark: (id) => set((state) => ({
        addedToBookmark: state.addedToBookmark.filter(movie => movie.id !== id)
      })),
    }),
    {
      name: 'movieApp-state',
      storage: createJSONStorage(() => localStorage)
    }
  )
)