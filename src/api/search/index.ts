import { AxiosResponse } from "axios";
import { api } from "@/api/api";
import { type MovieList } from "@/lib/types";

export const searchMovie = async (movie: string): Promise<MovieList> => {
  try {
    const response: AxiosResponse<MovieList> = await api.get<MovieList>(`search/movie?query=${movie}`)
    return response.data
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error
  }
}