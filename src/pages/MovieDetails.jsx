import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import { Rating } from '@smastrom/react-rating'

// css
import "./MovieDetails.css";
import '@smastrom/react-rating/style.css'

function MovieDetails() {
    console.log("here");
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    async function downloadMovieDetails() {
        let searchUrl = searchMovieById(id);
        const response = await axios.get(searchUrl);
        console.log(Math.floor(response.data.imdbRating));
        setMovie(response.data);
    }
    // const downloadMovieDetail = useCallback(downloadMovieDetails, [id]);
        // console.log(movie.imdbRating, "rating");
    useEffect(() => {
        downloadMovieDetails();

        return ()=>{
            setMovie(null);
        }
    }, [id])
    return ((movie == null) ?
        <div>Loading...</div> :
        <div className="movie-details-wrapper">
            
                <MovieCard
                Title={movie.Title}
                Year={movie.Year}
                Type={movie.Type}
                Poster={movie.Poster}
                id={movie.imdbID}
                />

            <div className="movie-details">
                <div>
                    Plot : {movie.Plot}
                </div>
                <div>
                    Actors : {movie.Actors}
                </div>
                <div>
                    Genre : {movie.Genre.split(',').map((genre)=>{
                        return <span className="genre" key={genre}>{genre}</span>
                    })}
                </div>
                <div>
                    <Rating style={{ maxWidth: 250 }} items={10} value={Math.floor(movie.imdbRating)}/>
                </div>
            </div>
            
        </div>
    )

}

export default MovieDetails;