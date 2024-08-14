export type MovieCollections = {
  id: number
  backdrop_path?: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
}

export type MovieList = {
  page: number
  results: MovieCollections[]
  total_pages: number
  total_results: number
}