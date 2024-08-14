import React, {
  createContext,
  useState,
  useEffect
} from 'react'
import { discoverMovies } from "@/api/discover";
import { type MovieList, type MovieCollections } from "@/lib/types";


export type MovieDBContextType = {
  movieList: MovieCollections[] | null
}

export const MovieDBContext = createContext<MovieDBContextType | null>(null)

export const MovieDBContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [movieList, setMovieList] = useState<MovieCollections[] | null>(null)

  const fetchMovies = async () => {
    try {
      const data: MovieList = await discoverMovies()
      setMovieList(data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <MovieDBContext.Provider value={{ movieList }}>
      {children}
    </MovieDBContext.Provider>
  )
}
