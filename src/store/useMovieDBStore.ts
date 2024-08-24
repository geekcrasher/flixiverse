import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import {
  type MovieCollections,
  type MovieList,
  type FilteredDetails,
} from '@/lib/types';
import {
  initialSelectedMovie,
  initialMovieCollections,
  initialFilteredDetails
} from './movieConstants';

type State = {
  searchMovieTitle: string
  selectedMovie: MovieCollections
  movieCollections: MovieList
  isMenuOpen: boolean
  selectedMovieFilteredDetails: FilteredDetails
}

type Action = {
  setSelectedMovie: (value: MovieCollections) => void
  setSearchTitle: (title: string) => void
  setMovieCollections: (value: MovieList) => void
  setIsMenuOpen: (value: boolean) => void
  setSelectedMovieFilteredDetails: (value: FilteredDetails) => void
}

export const useMovieDBStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        searchMovieTitle: '',
        selectedMovie: initialSelectedMovie,
        movieCollections: initialMovieCollections,
        selectedMovieFilteredDetails: initialFilteredDetails,
        isMenuOpen: false,
        setSearchTitle: (title) => set({ searchMovieTitle: title }),
        setSelectedMovie: (value) => set({ selectedMovie: value }),
        setMovieCollections: (value) => set({ movieCollections: value }),
        setIsMenuOpen: (value) => set({ isMenuOpen: !value }),
        setSelectedMovieFilteredDetails: (value) => {

          const {
            credits,
            genres,
            id,
            original_title,
            overview,
            popularity,
            poster_path,
            release_date,
            revenue,
            reviews,
            runtime,
            videos,
            vote_average,
            vote_count } = value;

          set({
            selectedMovieFilteredDetails: {
              credits,
              genres,
              id,
              original_title,
              overview,
              popularity,
              poster_path,
              release_date,
              revenue,
              reviews,
              runtime,
              videos,
              vote_average,
              vote_count
            }
          })
        }
      }),
      {
        name: 'movieDB-storage',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
);
