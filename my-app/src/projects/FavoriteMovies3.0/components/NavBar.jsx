import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const NavBar =  () => {
    const {dark, toggleTheme} = useTheme()
    return (
        <nav className={`nav-bar ${dark ? "nav-dark" : ""}`}>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <button
                onClick={toggleTheme}
            >
                {dark ? "light" : "dark"}
            </button>
        </nav>
    )
}

export default NavBar