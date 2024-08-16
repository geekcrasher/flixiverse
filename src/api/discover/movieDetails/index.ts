import { AxiosError, AxiosResponse } from "axios";
import { api } from '@/api/api';
import { type MovieList } from "@/lib/types";

export const fetchMovieDetails = async (movieID: number): Promise<MovieList> => {
  try {
    const response: AxiosResponse<MovieList> = await api.get<MovieList>(`/movie/${movieID}?append_to_response=videos`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error fetching movie data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};