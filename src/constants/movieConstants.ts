import {
  type MovieFilteredDetails,
  type MovieList,
  type TVShowFilteredDetails,
  type LastEpisodeToAir,
  CommonDetail,
} from "@/lib/types";

const commonDetails: CommonDetail = {
  backdrop_path: '',
  credits: {
    cast: []
  },
  genres: [],
  homepage: '',
  id: 0,
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  reviews: {
    results: []
  },
  spoken_languages: [],
  status: '',
  tagline: '',
  vote_average: 0,
  vote_count: 0,
  videos: {
    results: []
  },
};

export const initialFilteredMovieDetails: MovieFilteredDetails = {
  ...commonDetails,
  recommendations: {
    results: []
  },
  release_date: '',
  revenue: 0,
  runtime: 0,
  title: '',
};

const lastEpisode: LastEpisodeToAir = {
  id: 0,
  name: '',
  overview: '',
  vote_average: 0,
  vote_count: 0,
  air_date: '',
  episode_number: 0,
  episode_type: '',
  production_code: '',
  runtime: null,
  season_number: 0,
  show_id: 0,
  still_path: null,
}

export const initialFilteredTVShowDetails: TVShowFilteredDetails = {
  ...commonDetails,
  adult: false,
  created_by: [],
  episode_run_time: [],
  first_air_date: '',
  in_production: false,
  languages: [],
  last_air_date: '',
  last_episode_to_air: lastEpisode,
  name: '',
  next_episode_to_air: null,
  networks: [],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [],
  original_language: '',
  original_name: '',
  recommendations: {
    results: []
  },
  seasons: [],
  type: '',
};


export const initialMovieListDetails: MovieList = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

