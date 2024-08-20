import { AxiosError, AxiosResponse } from "axios";
import { api } from '@/api/api';
import { MovieList } from "@/lib/types";

export const fetchTrendingToday = async (): Promise<MovieList> => {
  try {
    const response: AxiosResponse<MovieList> = await api.get<MovieList>('/trending/movie/day');
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