
import './Home.css'

//components import 
import MovieCard from "../components/MovieCard/MovieCard"
import useMovieList from '../hooks/useMovieList'



export default function Home() {
    // if the component home re-renders the useMovieList() hook will also re-render and not re-mount itself remember that 
    const [movieList]  = useMovieList('harry','avengers');
    return (
        <>
            {/*navbar*/}
            {/*Movie List*/}
            {/*pagination pages*/}
            <div className="movie-card-wrapper">
                {movieList.map((movie) => <MovieCard
                    key = {movie.imdbID}
                    id = {movie.imdbID}
                    {...movie}
                />
                )
                }
                {/* <MovieCard {...movie}/>
                <MovieCard {...movie}/>
                <MovieCard {...movie}/> */}
            </div>
        </>
    )
}