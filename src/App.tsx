import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import SkeletonLoading from "./components/Skeleton"

const Movies = lazy(() => import('@/components/Movie/Discover'))

function App() {

  return (
    // 262c39
    // 20252e
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Navbar />
      <section className="flex items-center flex-wrap gap-4 mt-8">
        <Suspense fallback={<SkeletonLoading />} >
          <Movies />
        </Suspense>
      </section>
    </main>
  )
}

export default App
