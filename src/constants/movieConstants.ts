import { FilteredDetails } from "@/lib/types";

export const initialFilteredDetails: FilteredDetails = {
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
