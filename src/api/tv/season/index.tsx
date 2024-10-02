import { api } from '@/api/api'
import { type SeasonDetail } from '@/lib/types'
import { AxiosError, AxiosResponse } from 'axios'

export const fetchTVSeasonDetails = async (series_id: number, season_number: number = 1): Promise<SeasonDetail> => {

  try {
    const response: AxiosResponse<SeasonDetail> = await api.get<SeasonDetail>(`https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}`)

    return response.data

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error fetching season data:', error.message);
    }
    console.error('Unexpected error:', error);
    throw error
  }
}
