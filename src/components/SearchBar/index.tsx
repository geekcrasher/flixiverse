import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useMovieDBStore } from "@/store/useMovieDBStore";
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const setSearchTitle = useMovieDBStore((state) => state.setSearchTitle)


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query) {
      setSearchParams({ query }, { replace: true });
      setSearchTitle(query)
      navigate(`/search?query=${encodeURIComponent(query)}`, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
      navigate(previousPath || '/home', { replace: true });
    }
  }

  // Store the previous route before the search route is triggered
  useEffect(() => {
    if (location.pathname !== '/search') {
      setPreviousPath(location.pathname);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="relative flex items-center w-full h-full">
        <Input
          className="h-12 rounded-xl border-0 text-[#333]/80 text-sm text-gray-400 placeholder:text-sm sm:placeholder:text-md placeholder:text-gray-400 placeholder:font-normal w-full bg-infinity"
          placeholder="Search a movie"
          autoComplete="off"
          onChange={handleSearch}
          value={searchParams.get('query')?.toString() || ''}
          type="text"
        />
        <div className="absolute right-4">
          <Search color="white" className="w-4 h-4" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;