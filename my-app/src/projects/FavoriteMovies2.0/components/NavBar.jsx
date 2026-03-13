import { NavLink } from "react-router-dom";

const NavBar =  () => {
    return (
        <nav className="nav-bar">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar