import { useCallback, useEffect, useState } from "react"
import { fetchDiscoveredMovies } from "@/api/discover"
import { type MovieList } from "@/lib/types"
import { isMovieList } from "@/lib/typeGuards/guards"

export const useDiscoverMovies = () => {

  const [discoverMovies, setDiscoverMovies] = useState<MovieList | null>(null)

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetchDiscoveredMovies()

      if (isMovieList(data)) {
        setDiscoverMovies(data)
      } else {
        console.error('Invalid data structure received from API:', data);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching discover movie details:', error);
      } else {
        console.error('Unexpected error occurred:', error);
      }
    }
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])


  return {
    discoverMovies
  }

}