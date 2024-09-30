import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilteredTVShowDetails } from "@/api/tv/tvDetails";
import { type TVShowFilteredDetails } from "@/lib/types";
import { isValidID } from "@/lib/typeGuards/guards";
import { initialFilteredTVShowDetails } from "@/constants/movieConstants";

// Custom hook for handling tv show details
export const useTVFilteredDetails = () => {
  const [tvFilteredDetails, setTVFilteredDetails] = useState<TVShowFilteredDetails>({ ...initialFilteredTVShowDetails })
  const { tvID } = useParams()

  const fetchSelectedMovieDetails = useCallback(async () => {
    if (!isValidID(tvID)) {
      console.warn('Invalid tv ID:', tvID);
      return;
    }

    const numericMovieID = Number(tvID);

    try {
      const data = await fetchFilteredTVShowDetails(numericMovieID);

      if (typeof data === 'object' && data !== null) {
        setTVFilteredDetails(data);
      } else {
        console.error('Invalid data structure received from API:', data);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching selected movie details:', error);
      } else {
        console.error('Unexpected error occurred:', error);
      }
      setTVFilteredDetails(initialFilteredTVShowDetails)
    }
  }, [tvID]);

  useEffect(() => {
    fetchSelectedMovieDetails();
  }, [fetchSelectedMovieDetails]);

  return {
    tvFilteredDetails,
  }

}
