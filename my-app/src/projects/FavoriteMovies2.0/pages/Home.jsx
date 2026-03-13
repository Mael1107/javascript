import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="home-page">
            <h1>Welcome to the FavoriteMovies App!!</h1>
            <button className="btn-view-movies" onClick={() => navigate("/movies")}>View movies</button>
        </div>
    )
}

export default Home