import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";

function MovieDetails() {
    console.log("here");
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    async function downloadMovieDetails() {
        let searchUrl = searchMovieById(id);
        const response = await axios.get(searchUrl);
        console.log(response.data);
        setMovie(response.data);
    }
    // const downloadMovieDetail = useCallback(downloadMovieDetails, [id]);

    useEffect(() => {
        downloadMovieDetails();

        return ()=>{
            setMovie(null);
        }
    }, [id])
    return ((movie == null) ?
        <div>Loading...</div> :
        <div>
            <MovieCard
                Title={movie.Title}
                Year={movie.Year}
                Type={movie.Type}
                Poster={movie.Poster}
            />
        </div>
    )

}

export default MovieDetails;