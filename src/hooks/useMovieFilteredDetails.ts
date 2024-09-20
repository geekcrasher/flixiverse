import { useCallback, useEffect, useState } from "react";
import { fetchFilteredMovieDetails } from "@/api/discover/movieDetails";
import { FilteredDetails } from "@/lib/types";
import { useParams } from "react-router-dom";
import { initialFilteredDetails } from "@/constants/movieConstants";

// Custom hook for movie details with type guards
export const useMovieFilteredDetails = () => {
  const [movieFilteredDetails, setMovieFilteredDetails] = useState<FilteredDetails>({ ...initialFilteredDetails });
  const { movieID } = useParams();

  const isValidMovieID = (id: string | undefined): id is string => {
    return id !== undefined && !isNaN(Number(id));
  };

  const fetchSelectedMovieDetails = useCallback(async () => {
    if (!isValidMovieID(movieID)) {
      console.warn('Invalid movie ID:', movieID);
      return;
    }

    const numericMovieID = Number(movieID);

    try {
      const data = await fetchFilteredMovieDetails(numericMovieID);

      if (typeof data === 'object' && data !== null) {
        setMovieFilteredDetails(data);
      } else {
        console.error('Invalid data structure received from API:', data);
      }
    } catch (error) {
      console.error('Error fetching selected movie details:', error);
    }
  }, [movieID]);

  useEffect(() => {
    fetchSelectedMovieDetails();
  }, [fetchSelectedMovieDetails]);

  return {
    movieFilteredDetails
  };
};
