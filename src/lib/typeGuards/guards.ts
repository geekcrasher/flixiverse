import {
  type TrendingList,
  type MovieList,
  type TrendingMovieCollection,
  type TrendingTVCollection,
  MovieFilteredDetails,
  TVShowFilteredDetails,
  SeasonDetail
} from "../types";

export const isMovieList = (data: unknown): data is MovieList => {
  return (
    typeof data === "object" && data !== null &&
    "results" in data && Array.isArray(data?.results) &&
    "page" in data && typeof data?.page === "number" &&
    "total_pages" in data && typeof data?.total_pages === "number" &&
    'total_results' in data && typeof data?.total_results === 'number'
  );
};

export const isTrendingList = (data: unknown): data is TrendingList => {
  return (
    typeof data === "object" && data !== null &&
    "results" in data && Array.isArray(data?.results) &&
    "page" in data && typeof data?.page === "number" &&
    "total_pages" in data && typeof data?.total_pages === "number" &&
    'total_results' in data && typeof data?.total_results === 'number'
  );
};

export const isValidID = (id: string | undefined): id is string => {
  return id !== undefined && !isNaN(Number(id));
};


export const isMovie = (data: unknown): data is TrendingMovieCollection => {
  if (typeof data === 'object' && data !== null) {
    const { media_type } = data as { media_type?: string };
    return media_type === 'movie';
  }
  return false;
};

export const isTV = (data: unknown): data is TrendingTVCollection => {
  if (typeof data === 'object' && data !== null) {
    const { media_type } = data as { media_type?: string };
    return media_type === 'tv';
  }
  return false;
}

export const isMovieShow = (data: unknown): data is MovieFilteredDetails => {
  if (typeof data === 'object' && data !== null) {
    return 'title' in data && typeof data.title === 'string'
  }
  return false;
}


export const isTVShow = (data: unknown): data is TVShowFilteredDetails => {
  if (typeof data === 'object' && data !== null) {
    return 'name' in data && typeof data.name === 'string'
  }
  return false;
}


// export const isSeasonData = (data: unknown): data is SeasonDetail => {
//   if (typeof data === 'object' && data !== null) {
//     return '_id' in data && typeof data._id === 'string' &&
//       'id' in data && data.id === 'number' &&
//       'episodes' in data && Array.isArray(data.episodes)
//   }
//   return false;
// }

export const isSeasonData = (data: unknown): data is SeasonDetail => {
  if (typeof data === 'object' && data !== null) {
    return '_id' in data && typeof (data as SeasonDetail)._id === 'string' &&
      'id' in data && typeof (data as SeasonDetail).id === 'number' &&
      'episodes' in data && Array.isArray((data as SeasonDetail).episodes)
    // 'air_date' in data && typeof (data as SeasonDetail).air_date === 'string' &&
    // 'name' in data && typeof (data as SeasonDetail).name === 'string'
    // 'overview' in data && typeof (data as SeasonDetail).overview === 'string' &&
    // 'poster_path' in data && (typeof (data as SeasonDetail).poster_path === 'string' || (data as SeasonDetail).poster_path === null) &&
    // 'season_number' in data && typeof (data as SeasonDetail).season_number === 'number' &&
    // 'vote_average' in data && (typeof (data as SeasonDetail).vote_average === 'number' || (data as SeasonDetail).vote_average === null);
  }
  return false;
};
