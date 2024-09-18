export const initialSelectedMovie = {
  id: 0,
  original_language: '',
  title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  release_date: '',
  vote_average: 0,
  vote_count: 0,
};

export const initialMovieCollections = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const initialFilteredDetails = {
  backdrop_path: '',
  credits: {
    cast: [],
  },
  genres: [{
    id: null,
    name: ''
  }],
  id: null,
  title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  recommendations: {
    results: []
  },
  release_date: '',
  revenue: 0,
  reviews: {
    results: []
  },
  runtime: 0,
  videos: {
    results: [],
  },
  vote_average: 0,
  vote_count: 0,
};
