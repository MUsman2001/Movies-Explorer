import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

function MovieDetail() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        async function getMovie() {
        const result = await fetch(`http://www.omdbapi.com/?apikey=600c473f&i=${id}`)
        const data = await result.json();
        setMovie(data)
        console.log(data)
        }
        getMovie();
    }, [id])

    if(!movie) return <p>Loading...</p>

  return (
    <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
        <p><strong>Actors: </strong>{movie.Actors}</p>
		<p><strong>Genre: </strong>{movie.Genre}</p>
		<p><strong>Released: </strong>{movie.Released}</p>
		<p><strong>Plot: </strong>{movie.Plot}</p>
        <p><strong>Language: </strong>{movie.Language}</p>
        <p><strong>Runtime: </strong>{movie.Runtime}</p>
	</div>
  )
}

export default MovieDetail
