import { useEffect, useState } from "react"
import { discoverMovies } from "./api/discover"
import { type MovieList } from "./lib/types"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Navbar from "./components/Navbar"

function App() {

  const [movies, setMovies] = useState<MovieList | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await discoverMovies()
        setMovies(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])

  console.log(movies)

  return (
    // 262c39
    <main className="min-h-screen w-full flex flex-col bg-[#20252e]">
      <Navbar />
      <section className="flex items-center justify-center flex-wrap gap-4 mt-8">
        {movies && movies.results.map(movie => (
          <Card key={movie.id} className="overflow-hidden border-0 flex hover:cursor-pointer">
            <CardContent className="p-0">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="w-[200px] h-[275px]" />
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}

export default App
