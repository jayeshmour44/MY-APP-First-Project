import React, { useState } from 'react'
import MovieCard from '../Components/MovieCard'
import '../Styles/Home.css'

export default function Home() {
    const [searchQuery, setSearchQuary] = useState("")
    const movies = [
        {id: 1, title: "Kabir Singh", release_date: 2020},
        {id: 2, title: "Animal", release_date: 2025},
        {id: 3, title: "DDLJ", release_date: 2021},
        {id: 4, title: "Jai ho", release_date: 2023},
    ]

    const handleSearch = (e) =>{
        e.preventDefault()
       alert(searchQuery)
       setSearchQuary("")
    }
    return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" placeholder='Search For Movies...' className='Search-input' value={searchQuery} onChange={(e) => setSearchQuary(e.target.value)}/>
        <button type='submit' className="search-btn">
            Search
        </button>
        </form>

      <div className="movie-grid">
        {movies.map(movie => (
        <MovieCard movie = {movie} key={movie.id} />
    ))}
      </div>
    </div>
  )
}
