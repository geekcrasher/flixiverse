import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MovieDBContextProvider } from './context/MovieDBContext.tsx'
import MovieDetails from './components/Movie/index.tsx';
import SearchMovie from './pages/SearchMovie/index.tsx';
import About from './pages/About/index.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route
        index
        element={<MovieDetails />}
      />
      <Route path="search/results" element={<SearchMovie />} />
      <Route path="search" element={<div>this is the search results</div>} />
      <Route path="about" element={<About />} />
      <Route path="movies" element={<div> This is the Movies Page</div>} />
      <Route path="tv-shows" element={<div> This is the TV Shows Page</div>} />
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
