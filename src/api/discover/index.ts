import { AxiosResponse } from "axios";
import api from "@/api/api"
import { type MovieList } from "@/lib/types"

export const discoverMovies = async (): Promise<MovieList> => {
  try {
    const response: AxiosResponse<MovieList> = await api.get<MovieList>('/discover/movie')
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}