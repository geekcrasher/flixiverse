import { LucideProps } from "lucide-react"

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


export type MovieDetails = {
  budget: number
  genres: { name: string }[]
  original_title: string
  overview: string
  popularity: number
  release_date: string
  revenue: number
  runtime: number
  vote_average: number
  vote_count: number
}

export type Link = {
  id: number
  path: string
  label: string
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

export type Results<T> = {
  results: T[]
}

export type FilteredDetails = {
  backdrop_path: string
  credits: { cast: Cast[] }
  genres: {
    id: number | null
    name: string
  }[]
  id: number | null
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  recommendations: Results<unknown>
  release_date: string
  revenue: number
  reviews: Results<unknown>
  runtime: number
  videos: Results<unknown>
  vote_average: number
  vote_count: number
}

/** related types for FilteredDetails */
type Cast = {
  id: number | null
  character: string
  credit_id: number
  name: string
  profile_path: string
}

export type ReviewResults = {
  author: string
  author_details: {
    avatar_path: string
    rating: number
    username: string
  },
  content: string
  created_at: string
  updated_at: string
}

type VideoResults = {
  key: string
  name: string
  official: boolean
  published_at: string
  type: string
}

