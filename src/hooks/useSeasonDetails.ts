import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { type SeasonDetail } from '@/lib/types'
import { fetchTVSeasonDetails } from '@/api/tv/season'
import { isSeasonData, isValidID } from '@/lib/typeGuards/guards'

export const useSeasonDetails = () => {

  const [seasons, setSeasons] = useState<SeasonDetail | null>(null)

  const { tvID } = useParams()

  const fetchSeason = async () => {
    if (!isValidID(tvID)) {
      console.warn('Invalid tv ID:', tvID);
      return;
    }

    const numericMovieID = Number(tvID);

    try {
      const response: unknown = await fetchTVSeasonDetails(numericMovieID);
      if (isSeasonData(response)) {
        setSeasons(response);
      } else {
        console.error('Invalid data structure received from API:', response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeason()
  }, [tvID])

  return {
    seasons
  }
}
