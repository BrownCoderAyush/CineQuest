import axios from "axios";
import { searchMovie } from "../apis/omdb";
import { useState , useEffect } from "react";

function useMovieList(...args){
    const [movieList, setMovieList] = useState([]);
    async function downloadDefaultMovies(...args) {
        const urls = args.map((searchTerm) => searchMovie(searchTerm));
        const response = await axios.all(urls.map((url) =>
            axios.get(url)
        ))
        if(response[0].data.Error){
            setMovieList([]);
        }else{
            let moviesList = response.map((movies) => movies.data.Search);
            setMovieList([].concat(...moviesList));
        }
    }
    
    useEffect(() => {
        console.log("re-mounted");
        downloadDefaultMovies(...args);
    }, [...args])

    return [movieList];
}

export default useMovieList;