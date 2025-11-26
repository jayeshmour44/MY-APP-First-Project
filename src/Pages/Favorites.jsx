import React from 'react'
import '../Styles/Favorites.css'
import { useMovieContext } from '../Context/MovieContext'
import MovieCard from '../Components/MovieCard'


export default function Favorites() {
  const {favorites} = useMovieContext()

  if(favorites) {
    return (
      <div className='favorites'>
        <h2>Your Favorites</h2>
          <div className="movies-grid">
            {favorites.map(movie => (
                <MovieCard movie = {movie} key={movie.id} />
            ))}
          </div>
      </div>
    )
  }

  return (
    <div className='favorites-empty'>
      <h2>No Favorites movies yet</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur suscipit reiciendis, architecto aperiam eum adipisci!</p>
    </div>
  )
}
