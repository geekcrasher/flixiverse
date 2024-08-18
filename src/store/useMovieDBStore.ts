import { MovieCollections, MovieList } from '@/lib/types';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type State<T = unknown> = {
  searchMovieTitle: string
  selectedMovie: MovieCollections
  movieCollections: MovieList
  movieCollectionEntireDetails: T[]
}

type Action<T = unknown> = {
  setSelectedMovie: (data: MovieCollections) => void
  setSearchTitle: (title: string) => void
  setMovieCollections: (data: MovieList) => void
  setMovieCollectionEntireDetails: (data: T[]) => void
}

export const useMovieDBStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        searchMovieTitle: '',
        selectedMovie: {
          id: 0,
          original_language: '',
          original_title: '',
          overview: '',
          popularity: 0,
          poster_path: '',
          release_date: '',
          vote_average: 0,
          vote_count: 0
        },
        movieCollections: {
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0
        },
        movieCollectionEntireDetails: [],
        setSearchTitle: (title) => set({ searchMovieTitle: title }),
        setSelectedMovie: (data) => set({ selectedMovie: data }),
        setMovieCollections: (data) => set({ movieCollections: data }),
        setMovieCollectionEntireDetails: (data) => set({ movieCollectionEntireDetails: data })
      }),
      {
        name: 'movieDB-storage',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
);
