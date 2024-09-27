import { LucideProps } from "lucide-react"

export type MovieCollections = {
  id: number
  backdrop_path?: string
  name: string
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

export type MovieFilteredDetails = {
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
  recommendations: RecommendationResult
  release_date: string
  revenue: number
  reviews: ReviewResult
  runtime: number
  spoken_languages: ReadonlyArray<Language>
  status: string
  tagline: string
  title: string
  videos: VideoResult
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

export type Video = {
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

export type RecommendationResult = {
  results: ReadonlyArray<MovieCollections>
}

export type ReviewResult = {
  results: ReadonlyArray<Review>
}
export type VideoResult = {
  results: ReadonlyArray<Video>
}


type Media = 'movie' | 'tv'

type TrendingBase = {
  backdrop_path: string
  id: number
  overview: string
  poster_path: string
  media_type: Media
  adult: boolean
  original_language: string
  genre_ids: number[]
  popularity: number
  vote_average: number
  vote_count: number
}

/**
 * Useful type helper by Matt Pocock
 * 
 * Prettify<?>
 */
type Prettify<T> = {
  [K in keyof T]: T[K]
} & unknown;

export type TrendingTVCollection = Prettify<
  TrendingBase & {
    name?: string
    original_name?: string
    first_air_date?: string
    origin_country: string[]
  }
>

export type TrendingMovieCollection = Prettify<
  TrendingBase & {
    title?: string;
    original_title?: string;
    release_date?: string;
    video: boolean;
  }
>

export type TrendingList = Omit<MovieList, 'results'> & {
  results: (TrendingTVCollection | TrendingMovieCollection)[]
}

export type Creator = {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
};

export type Network = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
};

type Episode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
};

export type LastEpisodeToAir = Episode

export type NextEpisodeToAir = Episode

// Define the main type for the series
export type TVShowFilteredDetails = {
  adult: boolean;
  backdrop_path: string;
  created_by: ReadonlyArray<Creator>;
  episode_run_time: number[];
  first_air_date: string;
  genres: ReadonlyArray<Genre>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: NextEpisodeToAir | null;
  networks: ReadonlyArray<Network>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ReadonlyArray<ProductionCompany>
  production_countries: ReadonlyArray<ProductionCountry>
  recommendations: RecommendationResult
  reviews: ReviewResult
  seasons: ReadonlyArray<Season>;
  spoken_languages: ReadonlyArray<Language>;
  status: string;
  tagline: string;
  type: string;
  videos: VideoResult
  vote_average: number;
  vote_count: number;
};