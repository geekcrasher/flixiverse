import { AxiosResponse, AxiosError } from "axios";
import { api } from "@/api/api";
import { type MovieList } from "@/lib/types";

export const fetchMovieSearchResults = async (movieTitle: string): Promise<MovieList> => {
  try {
    // Split by spaces and join with '+'
    const formattedQuery = movieTitle.split(' ').join('+');

    const response: AxiosResponse<MovieList> = await api.get<MovieList>(`search/movie?query=${formattedQuery}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Error fetching movie data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}
