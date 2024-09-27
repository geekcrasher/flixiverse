import {
  type MovieFilteredDetails,
  type MovieList,
  type TVShowFilteredDetails,
  type LastEpisodeToAir,
} from "@/lib/types";

export const initialFilteredMovieDetails: MovieFilteredDetails = {
  backdrop_path: '',
  credits: {
    cast: [],
  },
  genres: [{
    id: null,
    name: ''
  }],
  homepage: undefined,
  id: null,
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  recommendations: {
    results: []
  },
  release_date: '',
  revenue: 0,
  reviews: {
    results: []
  },
  runtime: 0,
  spoken_languages: [],
  status: "",
  tagline: "",
  title: '',
  vote_average: 0,
  vote_count: 0,
  videos: {
    results: [],
  },
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
  adult: false,
  backdrop_path: '',
  created_by: [],
  episode_run_time: [],
  first_air_date: '',
  genres: [],
  homepage: '',
  id: 0,
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
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [],
  production_countries: [],
  recommendations: {
    results: []
  },
  reviews: {
    results: []
  },
  seasons: [],
  spoken_languages: [],
  status: '',
  tagline: '',
  type: '',
  videos: {
    results: []
  },
  vote_average: 0,
  vote_count: 0
};


export const initialMovieListDetails: MovieList = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

