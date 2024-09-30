import { useCallback, useEffect, useState } from "react"
import { fetchTrendingList } from "@/api/trending"
import { type TrendingList } from "@/lib/types"
import { isTrendingList } from "@/lib/typeGuards/guards"

export const useTrendingDetails = () => {

  const [trendingDetails, setTrendingDetails] = useState<TrendingList | null>(null)

  const fetchTrending = useCallback(async () => {
    try {
      const data: unknown = await fetchTrendingList()

      if (isTrendingList(data)) {
        setTrendingDetails(data)
      } else {
        console.error('Invalid data structure received from API:', data);
        return false
      }

    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching trending details:', error);
      } else {
        console.error('Unexpected error occurred:', error);
      }
    }
  }, [])


  useEffect(() => {
    fetchTrending()
  }, [fetchTrending])

  return {
    trendingDetails
  }
}
