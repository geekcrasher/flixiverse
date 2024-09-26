import { AxiosError, AxiosResponse } from "axios";
import { api } from "@/api/api";
import { type MovieList } from "@/lib/types";
import { isMovieList } from "@/lib/typeGuards/isMovieList";

export const fetchTrendingList = async (
  category: string = 'all',
  time_window: string = 'day',
  page: number = 1
): Promise<MovieList> => {
  try {
    const response: AxiosResponse<MovieList> = await api.get<MovieList>(`/trending/${category}/${time_window}?page=${page}`)

    if (isMovieList(response.data)) {
      return response.data
    }

    throw new Error("No valid data returned from API.")

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error fetching movie data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error
  }
}