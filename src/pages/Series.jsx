import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'

function Series() {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchSeries = async () => {
    setLoading(true)
    const res = await fetch(
      'https://www.omdbapi.com/?apikey=600c473f&s=2024&type=series'
    )
    const data = await res.json()
    setSeries(data.Search || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchSeries()
  }, [])

  return (
    <div className="home">
      <h2>📺 TV Shows</h2>
      {loading ? <p>Loading...</p> : <MovieList movies={series} />}
    </div>
  )
}

export default Series