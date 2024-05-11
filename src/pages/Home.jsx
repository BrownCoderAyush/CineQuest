import { useEffect, useState } from "react"
import axios from "axios"
import { searchMovie } from "../apis/omdb"
import './Home.css'

//components import 
import MovieCard from "../components/MovieCard/MovieCard"


export default function Home() {

    const [movieList, setMovieList] = useState([]);
    async function downloadDefaultMovies(...args) {
        const urls = args.map((searchTerm) => searchMovie(searchTerm));
        const response = await axios.all(urls.map((url) =>
            axios.get(url)
        ))
        let moviesList = response.map((movies) => movies.data.Search);
        setMovieList([].concat(...moviesList));
    }
    const movie = {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "15 Jul 2011",
        "Runtime": "130 min",
        "Genre": "Adventure, Family, Fantasy",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    }
    useEffect(() => {
        downloadDefaultMovies("harry", "avengers");
    }, [])


    return (
        <>
            {/*navbar*/}
            {/*Movie List*/}
            {/*pagination pages*/}
            <div className="movie-card-wrapper">
                {movieList.map((movie) => <MovieCard
                    key={movie.imdbID}
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