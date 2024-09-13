import { useCallback, useEffect } from "react";
import { useMovieDBStore } from "@/store/useMovieDBStore";
import { fetchFilteredMovieDetails } from "@/api/discover/movieDetails";
import { FilteredDetails } from "@/lib/types";

// Custom hook for movie details
export const useMovieFilteredDetails = (selectedMovieID: number | null) => {
  const setSelectedMovieFilteredDetails = useMovieDBStore((state) => state.setSelectedMovieFilteredDetails);

  const fetchSelectedMovieDetails = useCallback(async () => {
    if (!selectedMovieID) return;
    try {
      const data: FilteredDetails = await fetchFilteredMovieDetails(selectedMovieID);
      setSelectedMovieFilteredDetails(data);
    } catch (error) {
      console.error('Error fetching selected movie details:', error);
    }
  }, [selectedMovieID, setSelectedMovieFilteredDetails])

  useEffect(() => {
    fetchSelectedMovieDetails();
  }, [fetchSelectedMovieDetails]);
};