import { type MovieList } from "../types";

export const isMovieList = (data: unknown): data is MovieList => {
  return (
    typeof data === "object" && data !== null &&
    "results" in data && Array.isArray(data?.results) &&
    "page" in data && typeof data?.page === "number" &&
    "total_pages" in data && typeof data?.total_pages === "number" &&
    'total_results' in data && typeof data?.total_results === 'number'
  );
};