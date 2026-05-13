import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import FavoritesSection from './components/FavoritesSection'
import MovieGrid from './components/MovieGrid'
import SearchSection from './components/SearchSection'
import useMovies from './hooks/useMovies'


function App() {
  const [query,setQuery]=useState("")
  const [favorites, setFavorites]=useState(()=>{
    const saved=localStorage.getItem("favorites")
    return saved ? JSON.parse(saved):[]
  })
  const {movies,loading,error} = useMovies(query)

  const toggleFavorite=(movie)=>{
    const isAlready=favorites.some(f=>f.id===movie.id)
    if(isAlready){
      setFavorites(favorites.filter(f=>f.id!==movie.id))
    } else {
      setFavorites([...favorites,movie])
    }
  }

  useEffect(()=>{
    localStorage.setItem("favorites",JSON.stringify(favorites))
  })

  return (
      <div className="min-h-screen bg-gray-900">
        <Navbar brand="Movie Browser" links="#"/>
        <div className="max-w-7xl mx-auto p-6">
        <SearchSection query={query} setQuery={setQuery}/>
        {loading && <p className="text-white text-center mt-8">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-8">{error}</p>}
        {!loading && !error && (
          <MovieGrid
          movies={movies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          />
        )}
        <FavoritesSection
        favorites={favorites}
        onToggleFavorite={toggleFavorite}/>      
        </div>
      </div>
  )
}

export default App
