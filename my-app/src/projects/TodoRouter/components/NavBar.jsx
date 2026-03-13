import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#f0f0f0" }}>
            <Link to="/">Home</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default NavBar