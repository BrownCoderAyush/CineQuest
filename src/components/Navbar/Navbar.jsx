import { useRef , useState} from "react";
import "./Navbar.css"
import useMovieList from "../../hooks/useMovieList";
function Navbar() {
    const [searchTerm , setSearchTerm] = useState('');
    const [movieList]= useMovieList((searchTerm=='')?'Avengers':searchTerm);
    const resultListRef = useRef(null);

    return (
        <div className="navbar-wrapper">
            <div className="navbar-title">MovieBase</div>
            <div className="search-bar">
                <input
                    type="text"
                    id="movie-search-input"
                    onFocus={()=>{
                        resultListRef.current.style.display='block';
                    }}
                    onBlur={()=>{
                        resultListRef.current.style.display='none';
                    }}
                    onChange={(e)=>{
                        setSearchTerm(e.target.value);
                    }}
                    placeholder="what movie are you thinking about..."
                />
                <div id="result-list" ref={resultListRef}>
                    <div>Auto complete results....</div>
                    {movieList.length>0 && movieList.map(movie=><div key={movie.imdbID}>{movie.Title}</div>)}
                </div>
            </div>
            <div className="navbar-theme">
                Theme
            </div>
        </div>
    )
}

export default Navbar;