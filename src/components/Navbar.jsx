import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function Navbar({ onSearch, theme, onToggleTheme }) {
    const searchRef = useRef();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const q = searchRef.current.value.trim();
        if (q) {
            onSearch(q);
            navigate(`/?search=${q}`);
            searchRef.current.value = ""
            searchRef.current.focus()
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link className="logo" to="/">
                        <h2>🎬 Movie Explorer</h2>
                    </Link>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/series">TV Shows</Link>
                    </div>
                </div>

                <div className="themeToggleWrap">
                    <label className="themeSwitch">
                        <input
                            type="checkbox"
                            checked={theme === "light"}
                            onChange={onToggleTheme}
                        />                        
                        <span className="themeSlider"></span>
                    </label>
                </div>

                <form className="search-form" onSubmit={handleSearch}>
                    <input 
                        ref={searchRef} 
                        className="searchInput" 
                        placeholder="Search movies..." 
                    />
                    <button type="submit" className="searchBtn">🔎</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;