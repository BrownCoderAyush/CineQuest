import { useContext, useRef, useState } from "react";
import "./Navbar.css"
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link , useNavigate} from "react-router-dom";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import themeContext from "../../contexts/theme-context";


function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movieList] = useMovieList(searchTerm);
    const navigator = useNavigate();
    const resultListRef = useRef(null);
    const {theme , setTheme} = useContext(themeContext);


    const setThemeHandler = (theme)=>{
        if(theme=='dark'){
            localStorage.setItem('app-theme','Sun');
            setTheme('Sun');
        }else{
            localStorage.setItem('app-theme','dark');
            setTheme('dark');
        }
    }

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
            <div onClick={()=>setThemeHandler(theme)} className="navbar-theme">
            <FontAwesomeIcon className="theme-change-icon" icon={(theme=='dark')?faMoon:faSun} />
            </div>
        </div>
    )
}

export default Navbar;