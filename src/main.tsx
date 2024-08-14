import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MovieDBContextProvider } from './context/MovieDBContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieDBContextProvider>
      <App />
    </MovieDBContextProvider>
  </React.StrictMode>,
)
