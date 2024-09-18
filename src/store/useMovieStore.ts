import { type FilteredDetails } from "@/lib/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  movieAddedToWishlist: FilteredDetails[]
  movieAddedToBookmark: FilteredDetails[]
}

type Action = {
  setAddMovieToWishlist: (value: FilteredDetails) => void
  setAddMovieToBookmark: (value: FilteredDetails) => void
  removeToWishlist: (id: number | null) => void;
  removeToBookmark: (id: number | null) => void;
}

export const useMovieStore = create<State & Action>()(
  persist(
    (set) => ({
      movieAddedToWishlist: [],
      movieAddedToBookmark: [],

      setAddMovieToWishlist: (value) => set((state) => ({
        movieAddedToWishlist: [...state.movieAddedToWishlist, value]
      })),
      setAddMovieToBookmark: (value) => set((state) => ({
        movieAddedToBookmark: [...state.movieAddedToBookmark, value]
      })),


      removeToWishlist: (id: number | null) => set((state) => ({
        movieAddedToWishlist: state.movieAddedToWishlist.filter(movie => movie.id !== id)
      })),
      removeToBookmark: (id: number | null) => set((state) => ({
        movieAddedToBookmark: state.movieAddedToBookmark.filter(movie => movie.id !== id)
      })),
    }),
    {
      name: 'movieApp-state',
      storage: createJSONStorage(() => localStorage)
    }
  )
)