import {useState, useEffect} from 'react'
import MovieList from '../components/MovieList'

function Home({query}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchMovies = async (search) => {
        setLoading(true)
        const result = await fetch(`https://www.omdbapi.com/?apikey=600c473f&s=${search}`)
        const data = await result.json();
        console.log(data);
        setMovies(data.Search || [])
        setLoading(false)
    }

    useEffect(() => {
        if(!query){
            fetchMovies("2026")
        }
    }, [query])

    useEffect(() => {
  if(query){
    fetchMovies(query)
  }
}, [query])

  return (
      <div className="home">

        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
	</div>
  )
}

export default Home
