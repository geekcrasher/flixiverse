import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MovieDBContextProvider } from './context/MovieDBContext.tsx'
import About from './pages/About/index.tsx';
import Discover from './pages/Discover/index.tsx';
import SearchMovie from './pages/SearchMovie/index.tsx';
import MovieSummary from './pages/MovieSummary/index.tsx';
import Wishlist from './pages/Wishlist/index.tsx';
import Bookmark from './pages/Bookmark/index.tsx';
import Trending from './pages/Trending/index.tsx';
import TVShowSummary from './pages/TVShowSummary/index.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route
        index
        path='home'
        element={<Discover />}
      />
      <Route path="search" element={<SearchMovie />} />
      <Route path="movie/watch/:movieID" element={<MovieSummary />} />
      <Route path="tv/watch/:tvID" element={<TVShowSummary />} />
      <Route path="trending" element={<Trending />} />
      <Route path="popular" element={<div> This is the popular Page</div>} />
      <Route path="movies" element={<div> This is the Movies Page</div>} />
      <Route path="tv-shows" element={<div> This is the TV Shows Page</div>} />
      <Route path="about" element={<About />} />
      <Route path="wishlists" element={<Wishlist />} />
      <Route path="bookmarked" element={<Bookmark />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieDBContextProvider>
      <RouterProvider router={router} />
    </MovieDBContextProvider>
  </React.StrictMode>,
)
