import MovieCard from "../components/MovieCard/MovieCard"
import './Home.css'

export default function Home(){
    const movie = {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "15 Jul 2011",
        "Runtime": "130 min",
        "Genre": "Adventure, Family, Fantasy",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    }
    return (
        <>
         {/*navbar*/}
         {/*Movie List*/}
         {/*pagination pages*/}
         <div className="movie-card-wrapper">
         <MovieCard {...movie}/>
         <MovieCard {...movie}/>
         <MovieCard {...movie}/>
         <MovieCard {...movie}/>
         <MovieCard {...movie}/>
         <MovieCard {...movie}/>
         <MovieCard {...movie}/>
         </div>
        </>
    )
}