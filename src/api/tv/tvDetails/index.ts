import { AxiosError, AxiosResponse } from "axios";
import { api } from '@/api/api';
import { type TVShowFilteredDetails } from "@/lib/types";

export const fetchFilteredTVShowDetails = async (tvID: number): Promise<TVShowFilteredDetails> => {
  try {
    const response: AxiosResponse<TVShowFilteredDetails> = await api.get<TVShowFilteredDetails>(`/tv/${tvID}?append_to_response=videos,credits,reviews,recommendations`);
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