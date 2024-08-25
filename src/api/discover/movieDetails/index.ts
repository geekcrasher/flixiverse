import { AxiosError, AxiosResponse } from "axios";
import { api } from '@/api/api';
import { FilteredDetails } from "@/lib/types";

export const fetchFilteredMovieDetails = async (movieID: number = 0): Promise<FilteredDetails> => {
  try {
    const response: AxiosResponse<FilteredDetails> = await api.get<FilteredDetails>(`/movie/${movieID}?append_to_response=videos,credits,reviews`);
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