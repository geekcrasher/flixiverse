import { useForm } from "react-hook-form";
import { useMovieDBStore } from "@/store/useMovieDBStore";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchTitleSchema } from "@/schema/SearchTitleSchema";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

import { useNavigate, useSearchParams } from 'react-router-dom';



const SearchBar = () => {
  const setSearchTitle = useMovieDBStore((state) => state.setSearchTitle)

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams()

  const form = useForm<z.infer<typeof SearchTitleSchema>>({
    resolver: zodResolver(SearchTitleSchema),
    // defaultValues: {
    //   movieTitle: ""
    // }
  })

  const onSubmit = (values: z.infer<typeof SearchTitleSchema>) => {
    try {
      // setSearchTitle(values.movieTitle)
      console.log(values)
      form.reset({})
    } catch (error) {
      console.log(error)
    }
  }


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query) {
      setSearchParams({ query }, { replace: true });
      setSearchTitle(query)
      navigate(`/search?query=${encodeURIComponent(query)}`, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
      navigate(`/`, { replace: true });
    }
  }


  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-inter w-[25rem]">
          <FormField
            control={form.control}
            name="movieTitle"
            render={({ field }) => (
              <FormItem>
                <FormControl >
                  <div className="flex items-center h-fit relative">
                    <Input
                      className="h-12 rounded-xl bg-[#262c39] border-0 text-[#333]/80  text-base md:text-lg font-bold placeholder:text-sm sm:placeholder:text-md placeholder:text-gray-400 placeholder:font-normal"
                      placeholder="Search a movie"
                      autoComplete="off"
                      onChangeCapture={handleSearch}
                      {...field}
                    />
                    <Search className="absolute right-8 top-3 text-[#00d1a7]" size={22} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="sr-only">Submit</Button>
        </form>
      </Form>


      {/* <form onSubmit={(event) => event.preventDefault()}>
        <input
          className="h-12 rounded-xl border-0 text-[#333]/80  text-base md:text-lg font-bold placeholder:text-sm sm:placeholder:text-md placeholder:text-gray-400 placeholder:font-normal"
          placeholder="Search a movie"
          autoComplete="off"
          onChange={handleSearch}
          value={searchParams.get('query') || ''}
          type="text"
        />
      </form> */}
    </>
  );
}

export default SearchBar;