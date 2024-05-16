import { useRef, useState } from "react";
import "./Navbar.css"
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
import { searchMovieById } from "../../apis/omdb";
import { Link , useNavigate} from "react-router-dom";
function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movieList] = useMovieList(searchTerm);
    const navigator = useNavigate();
    const resultListRef = useRef(null);

    return (
        <div className="navbar-wrapper">

            <div className="navbar-title"><Link to="/">MovieBase</Link></div>
            <div
                className="search-bar"
            >
                <input
                    type="text"
                    id="movie-search-input"

                    onFocus={() => {
                        resultListRef.current.style.display = 'block';
                    }}

                    onBlur={() => {
                        resultListRef.current.style.display = 'none';
                    }}

                    onChange={useDebounce((e) => {
                        setSearchTerm(e.target.value);
                    })}

                    placeholder="what movie are you thinking about..."
                />
                <div id="result-list" ref={resultListRef}>
                    <div>Auto complete results....{searchTerm}</div>
                    {movieList.length > 0 &&
                        movieList.map(movie =>( 
                        <Link className="navbar-search-list" to={`/movie/${movie.imdbID}`} key={movie.imdbID} >
                        <div
                            onMouseDown={
                                async(e) => {
                                    // console.log(e.target )
                                    // let searchUrl = searchMovieById(movie.imdbID);
                                    // console.log(searchUrl);
                                    // const response = await axios.get(searchUrl);
                                    // console.log(response , "response");
                                    navigator(`/movie/${movie.imdbID}`)
                                }

                            }>
                            {movie.Title}
                        </div>
                        </Link>
                        ))}
                </div>
            </div>
            <div className="navbar-theme">
                Theme
            </div>
        </div>
    )
}

export default Navbar;