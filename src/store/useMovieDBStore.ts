import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { type FilteredDetails } from '@/lib/types';
import { initialFilteredDetails } from './movieConstants';

type State = {
  selectedMovieFilteredDetails: FilteredDetails
  searchMovieTitle: string
}

type Action = {
  setSearchTitle: (title: string) => void
  setSelectedMovieFilteredDetails: (value: FilteredDetails) => void
}

export const useMovieDBStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
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
