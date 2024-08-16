import { MovieCollections } from '@/lib/types';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type State = {
  searchMovieTitle: string
  selectedMovie: MovieCollections
}

type Action = {
  setSelectedMovie: (data: MovieCollections) => void
  setSearchTitle: (title: string) => void
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
        setSearchTitle: (title) => set({ searchMovieTitle: title }),
        setSelectedMovie: (data) => set({ selectedMovie: data })
      }),
      {
        name: 'movieDB-storage',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
);



// export const useMovieDBStore = create<State & Action>()((set) => ({
//   searchMovieTitle: '',
//   setSearchTitle: (title: string) => set({ searchMovieTitle: title }),
// })
// )


// type counterStore = {
//   count: number
//   setCount: () => void
// }

// export const useCounterStore = create<counterStore>()(
//   persist(
//     (set, get) => ({
//       count: 0,
//       setCount: () => set({ count: get().count + 1 })
//     }),
//     {
//       name: "counter-storage",
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );