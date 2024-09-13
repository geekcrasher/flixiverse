import { MovieCollections, MovieList } from "@/lib/types";
import { AxiosResponse, AxiosError } from "axios";
import { api } from "../api";


export const fetchRecommendationMovies = async (movieID: number): Promise<MovieCollections[]> => {
  try {
    const response: AxiosResponse<MovieList> = await api.get<MovieList>(`/movie/${movieID}/recommendations`)
    return response.data.results
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error fetching movie data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}