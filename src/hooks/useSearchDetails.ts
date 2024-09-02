import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "./useDebounce";
import { useMovieDBStore } from "@/store/useMovieDBStore";
import { fetchMovieSearchResults } from "@/api/search";
import { type MovieList } from "@/lib/types";

// Custom hook for search details
export const useSearchDetails = () => {
  const [searchResults, setSearchResults] = useState<MovieList | null>(null);
  const searchTitle = useMovieDBStore((state) => state.searchMovieTitle)
  const debouncedSearchTitle = useDebounce(searchTitle);


  const fetchSearchDetails = useCallback(async () => {
    if (!debouncedSearchTitle) return;
    try {
      const data: MovieList = await fetchMovieSearchResults(debouncedSearchTitle);
      if (data.results.length > 0) setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search details:', error);
    }
  }, [debouncedSearchTitle])

  useEffect(() => {
    fetchSearchDetails();
  }, [fetchSearchDetails]);

  return searchResults;
};