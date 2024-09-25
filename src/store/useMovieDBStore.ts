import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type State = {
  selectedMovieID: number | null
  searchMovieTitle: string
}

type Action = {
  setSelectedMovieID: (id: number) => void
  setSearchTitle: (title: string) => void
}

export const useMovieDBStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        selectedMovieID: null,
        searchMovieTitle: '',
        setSelectedMovieID: (id) => set({ selectedMovieID: id }),
        setSearchTitle: (title) => set({ searchMovieTitle: title }),
      }),
      {
        name: 'movieDB-storage',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
);
