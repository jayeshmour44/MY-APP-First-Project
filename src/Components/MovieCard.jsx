import React from 'react'
import { VscHeart } from "react-icons/vsc";
import '../Styles/MovieCard.css'
import { useMovieContext } from '../Context/MovieContext';


export default function MovieCard({movie}) {
  const {isFavorite, addToFavorites, removeFromFavorties} = useMovieContext()
  const favorite = isFavorite(movie.id)

  function onFavoriteClick(e) {
    e.preventDefault()
    if(favorite) removeFromFavorties(movie.id)
      else addToFavorites(movie)

  }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className= {`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    <VscHeart /> 
                </button>
            </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  )
}
