import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'

function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchMovies = async () => {
    setLoading(true)
    const res = await fetch(
      'https://www.omdbapi.com/?apikey=600c473f&s=2026&type=movie'
    )
    const data = await res.json()
    setMovies(data.Search || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="home">
      <h2>🎬 Movies</h2>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  )
}

export default Movies