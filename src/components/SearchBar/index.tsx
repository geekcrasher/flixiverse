import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";


const formSchema = z.object({
  word: z.string().min(1, {
    message: "Please enter a word",
  }).toLowerCase(),
})

const SearchBar = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: ""
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>): void => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-inter w-[25rem]">
          <FormField
            control={form.control}
            name="word"
            render={({ field }) => (
              <FormItem>
                <FormControl >
                  <div className="flex items-center h-fit relative">
                    <Input
                      className="h-12 rounded-xl border-0 text-[#333]/80 bg-[#262c39] text-base md:text-lg font-bold placeholder:text-sm sm:placeholder:text-md placeholder:text-gray-400 placeholder:font-normal"
                      placeholder="Search a movie"
                      autoComplete="off"
                      {...field}
                    />
                    <Search className="absolute right-8 top-3 text-[#00d1a7]" size={22} />
                  </div>
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <Button type="submit" className="sr-only">Submit</Button>
        </form>
      </Form>
    </>
  );
}

export default SearchBar;