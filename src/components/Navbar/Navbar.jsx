import "./Navbar.css"
function Navbar(){
    return (
        <div className="navbar-wrapper">
            <div className="navbar-title">MovieBase</div>
            <div className="search-bar">
                <input type="text" placeholder="what movie are you thinking about..." />
            </div>
            <div className="navbar-theme">
                Theme
            </div>
        </div>
    )
}

export default Navbar;