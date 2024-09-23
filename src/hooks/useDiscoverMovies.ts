import { useCallback, useEffect, useState } from "react"
import { fetchDiscoveredMovies } from "@/api/discover"
import { type MovieList } from "@/lib/types"

export const useDiscoverMovies = () => {

  const [discoverMovies, setDiscoverMovies] = useState<MovieList | null>(null)

  const isMovieList = (data: unknown): data is MovieList => {
    return (
      typeof data === "object" && data !== null &&
      "results" in data && Array.isArray((data as MovieList).results) &&
      "page" in data && typeof (data as MovieList).page === "number" &&
      "total_pages" in data && typeof (data as MovieList).total_pages === "number" &&
      'total_results' in data && typeof (data as MovieList).total_results === 'number'
    );
  };

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetchDiscoveredMovies()

      if (isMovieList(data)) {
        setDiscoverMovies(data)
      } else {
        console.error('Invalid data structure received from API:', data);
      }
    } catch (error) {
      console.error('Error fetching selected movie details:', error);
    }
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])


  return {
    discoverMovies
  }

}