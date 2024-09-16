import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import {
  type FilteredDetails,
} from '@/lib/types';
import {
  initialFilteredDetails
} from './movieConstants';

type State = {
  // selectedMovie: MovieCollections
  // movieCollections: MovieList
  selectedMovieFilteredDetails: FilteredDetails
  searchMovieTitle: string
}

type Action = {
  // setSelectedMovie: (value: MovieCollections) => void
  // setMovieCollections: (value: MovieList) => void
  setSearchTitle: (title: string) => void
  setSelectedMovieFilteredDetails: (value: FilteredDetails) => void
}

export const useMovieDBStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        // selectedMovie: initialSelectedMovie,
        // movieCollections: initialMovieCollections,
        // setSelectedMovie: (value) => set({ selectedMovie: value }),
        // setMovieCollections: (value) => set({ movieCollections: value }),
        searchMovieTitle: '',
        selectedMovieFilteredDetails: initialFilteredDetails,
        setSearchTitle: (title) => set({ searchMovieTitle: title }),
        setSelectedMovieFilteredDetails: (value) => {

          const {
            backdrop_path,
            credits,
            genres,
            id,
            title,
            overview,
            popularity,
            poster_path,
            recommendations,
            release_date,
            revenue,
            reviews,
            runtime,
            videos,
            vote_average,
            vote_count } = value;

          set({
            selectedMovieFilteredDetails: {
              backdrop_path,
              credits,
              genres,
              id,
              title,
              overview,
              popularity,
              poster_path,
              recommendations,
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
