import { useRef } from "react";
import "./Navbar.css"
function Navbar() {
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
                    placeholder="what movie are you thinking about..."
                />
                <div id="result-list" ref={resultListRef}>
                    <div>result 1</div>
                    <div>result 2</div>
                    <div>result 3</div>
                </div>
            </div>
            <div className="navbar-theme">
                Theme
            </div>
        </div>
    )
}

export default Navbar;