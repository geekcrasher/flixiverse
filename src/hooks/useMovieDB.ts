import { useContext } from "react"
import { MovieDBContext, MovieDBContextType } from "@/context/MovieDBContext"

export const useMovieDB = (): MovieDBContextType => {
  const context = useContext(MovieDBContext)
  if (!context) {
    throw new Error('useMovieDB must be used within a CountriesProvider')
  }
  return context
}