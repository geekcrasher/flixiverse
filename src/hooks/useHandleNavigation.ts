import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { isMovieShow, isTVShow } from "@/lib/typeGuards/guards";

export const useHandleNavigation = () => {

  const navigate = useNavigate()

  const handleNavigation = useCallback((collection: unknown) => {
    if (isMovieShow(collection)) {
      if (!collection.title) {
        console.error('Movie title is missing');
        return;
      }
      navigate(`/movie/watch/${collection.id}?${encodeURIComponent(collection.title.toLowerCase())}`);
    } else if (isTVShow(collection)) {
      if (!collection.name) {
        console.error('TV show name is missing');
        return;
      }
      navigate(`/tv/watch/${collection.id}?${encodeURIComponent(collection.name.toLowerCase())}`);
    }
  }, [navigate])

  return {
    handleNavigation
  }
};