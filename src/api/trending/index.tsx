import { AxiosError, AxiosResponse } from "axios";
import { api } from "@/api/api";
import { type TrendingList } from "@/lib/types";
import { isTrendingList } from "@/lib/typeGuards/guards";

export const fetchTrendingList = async (
  category: string = 'all',
  time_window: string = 'day',
  page: number = 1
): Promise<TrendingList> => {
  try {
    const response: AxiosResponse<TrendingList> = await api.get<TrendingList>(`/trending/${category}/${time_window}?page=${page}`)

    if (isTrendingList(response.data)) {
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