import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </div>
    )
    
}

export default NavBar