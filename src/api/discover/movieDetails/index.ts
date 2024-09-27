import { AxiosError, AxiosResponse } from "axios";
import { api } from '@/api/api';
import { type MovieFilteredDetails } from "@/lib/types";

export const fetchFilteredMovieDetails = async (movieID: number = 0): Promise<MovieFilteredDetails> => {
  try {
    const response: AxiosResponse<MovieFilteredDetails> = await api.get<MovieFilteredDetails>(`/movie/${movieID}?append_to_response=videos,credits,reviews,recommendations`);
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