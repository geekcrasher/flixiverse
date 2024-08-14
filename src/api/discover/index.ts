import { AxiosError, AxiosResponse } from "axios";
import { api } from '@/api/api';
import { type MovieList } from "@/lib/types";

export const discoverMovies = async (page: number = 1): Promise<MovieList> => {
  try {
    const response: AxiosResponse<MovieList> = await api.get<MovieList>(`/discover/movie?page=${page}`);
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
