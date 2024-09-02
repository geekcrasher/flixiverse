import { useState, useEffect, useCallback } from "react";
import { fetchRecommendationMovies } from "@/api/recommendation";
import { type MovieCollections } from "@/lib/types";

/** Function to get movie recommendations based on the selected movie */
export const useRecommendations = (selectedMovieID: number | null) => {
  const [recommendations, setRecommendations] = useState<MovieCollections[] | null>(null);

  const fetchRecommendations = useCallback(async () => {
    if (!selectedMovieID) return;
    try {
      const data = await fetchRecommendationMovies(selectedMovieID);

      if (data && data.length > 0)
        setRecommendations(data);
      else
        console.warn('No recommendations found for this movie.');

    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  }, [selectedMovieID])

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  return recommendations;
};