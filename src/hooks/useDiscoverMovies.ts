import { useContext } from "react"
import { MovieDBContext, MovieDBContextType } from "@/context/MovieDBContext"

export const useDiscoverMovies = (): MovieDBContextType => {
  const context = useContext(MovieDBContext)
  if (!context) {
    throw new Error('useDiscoverMovies must be used within a CountriesProvider')
  }
  return context
}