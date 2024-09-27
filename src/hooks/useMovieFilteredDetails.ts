import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilteredMovieDetails } from "@/api/discover/movieDetails";
import { type MovieFilteredDetails } from "@/lib/types";
import { initialFilteredMovieDetails } from "@/constants/movieConstants";
import { isValidID } from "@/lib/typeGuards/guards";


// Custom hook for handling movie details
export const useMovieFilteredDetails = () => {
  const [movieFilteredDetails, setMovieFilteredDetails] = useState<MovieFilteredDetails>({ ...initialFilteredMovieDetails });
  const { movieID } = useParams();

  const fetchSelectedMovieDetails = useCallback(async () => {
    if (!isValidID(movieID)) {
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
      if (error instanceof Error) {
        console.error('Error fetching selected movie details:', error);
      } else {
        console.error('Unexpected error occurred:', error);
      }
      setMovieFilteredDetails(initialFilteredMovieDetails)
    }
  }, [movieID]);

  useEffect(() => {
    fetchSelectedMovieDetails();
  }, [fetchSelectedMovieDetails]);

  return {
    movieFilteredDetails
  };
};
