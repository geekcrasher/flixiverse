import { LucideProps } from "lucide-react"

export type MovieCollections = {
  id: number
  backdrop_path?: string
  original_language: string
  title: string
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

export type FilteredDetails = {
  backdrop_path: string
  credits: {
    cast: ReadonlyArray<Cast>
  }
  genres: ReadonlyArray<Genre>
  homepage?: ''
  id: number | null
  title: string
  overview: string
  popularity: number
  poster_path: string
  recommendations: {
    results: ReadonlyArray<MovieCollections>
  }
  release_date: string
  revenue: number
  reviews: {
    results: ReadonlyArray<ReviewResult>
  }
  runtime: number
  videos: {
    results: ReadonlyArray<VideoResult>
  }
  vote_average: number
  vote_count: number
}

/** related types for FilteredDetails */
type Cast = {
  id: number | null
  original_name: string
  character: string
  credit_id: number
  name: string
  profile_path: string
}

type Genre = {
  id: number | null
  name: string
}

export type AuthorDetail = {
  avatar_path: string
  rating: number
  username: string
}

export type ReviewResult = {
  author: string
  author_details: AuthorDetail
  content: string
  created_at: string
  updated_at: string
}

type VideoResult = {
  key: string
  name: string
  official: boolean
  published_at: string
  type: string
}

