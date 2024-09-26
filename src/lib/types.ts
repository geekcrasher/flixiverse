import { LucideProps } from "lucide-react"

export type MovieCollections = {
  id: number
  backdrop_path?: string
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  vote_average: number
  vote_count: number
}

export type MovieList = {
  page: number
  results: MovieCollections[]
  total_pages: number
  total_results: number
}

export type Link = {
  id: number
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  label: string
  path: string
}

export type FilteredDetails = {
  id: number | null
  backdrop_path: string
  credits: {
    cast: ReadonlyArray<Cast>
  }
  genres: ReadonlyArray<Genre>
  homepage?: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ReadonlyArray<ProductionCompany>
  production_countries: ReadonlyArray<ProductionCountry>
  recommendations: {
    results: ReadonlyArray<MovieCollections>
  }
  release_date: string
  revenue: number
  reviews: {
    results: ReadonlyArray<Review>
  }
  runtime: number
  spoken_languages: ReadonlyArray<Language>
  status: string
  tagline: string
  title: string
  videos: {
    results: ReadonlyArray<Video>
  }
  vote_average: number
  vote_count: number
}

/** related types for FilteredDetails */
type Cast = {
  id: number | null
  character: string
  credit_id: number
  name: string
  original_name: string
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

export type Review = {
  author: string
  author_details: AuthorDetail
  content: string
  created_at: string
  updated_at: string
}

type Video = {
  key: string
  name: string
  official: boolean
  published_at: string
  type: string
}

type ProductionCompany = {
  id: number
  name: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type Language = {
  iso_639_1: string
  english_name: string
}