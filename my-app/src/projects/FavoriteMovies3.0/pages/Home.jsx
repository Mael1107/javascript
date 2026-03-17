import { useNavigate } from "react-router-dom"
import { useTheme } from "../Context/ThemeContext"

const Home = () => {
    const navigate = useNavigate()
    const {dark} = useTheme()

    return (
        <div className={`home-page ${dark ? "dark" : ""}`}>
            <h1>Welcome to the FavoriteMovies App!!</h1>
            <button className="btn-view-movies" onClick={() => navigate("/movies")}>View movies</button>
        </div>
    )
}

export default Home