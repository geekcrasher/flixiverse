import { z } from "zod"

export const SearchTitleSchema = z.object({
  movieTitle: z.string().min(1, {
    message: "Please type the title of the movie",
  }).toLowerCase(),
})