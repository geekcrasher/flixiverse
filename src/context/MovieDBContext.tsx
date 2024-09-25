import React, {
  createContext,
  useState,
  useEffect,
} from 'react'
import { fetchDiscoveredMovies } from "@/api/discover";
import { type MovieList } from "@/lib/types";


export type MovieDBContextType = {
  movieList: MovieList | null
  selectedMovieID: number | null
  setSelectedMovieID: React.Dispatch<React.SetStateAction<number | null>>
}

export const MovieDBContext = createContext<MovieDBContextType | null>(null)

export const MovieDBContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [movieList, setMovieList] = useState<MovieList | null>(null)
  const [selectedMovieID, setSelectedMovieID] = useState<number | null>(null)

  /** Function to get the movies when the page renders */
  const fetchMovies = async () => {
    try {
      const data: MovieList = await fetchDiscoveredMovies()
      setMovieList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])


  return (
    <MovieDBContext.Provider value={{ movieList, selectedMovieID, setSelectedMovieID }}>
      {children}
    </MovieDBContext.Provider>
  )
}
