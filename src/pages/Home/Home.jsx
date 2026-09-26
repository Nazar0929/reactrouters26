
import { getTrendingMovies } from "../../Api"
import { useEffect, useState } from "react"

function Home () {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchMovies() {
            const movies = await getTrendingMovies()
            console.log(getTrendingMovies());
            setMovie(movies);
            
            
        }
         fetchMovies()
    }, [])
    // console.log(movie);
    
   
    return (
        <>
        <h1>Trending Today</h1>
        <ul>
            {movie.map((movie) => {
                return (
                    <li key={movie.id}>{movie.title}</li>
                )
            })}
        </ul>
        </>
    )
}

export default Home