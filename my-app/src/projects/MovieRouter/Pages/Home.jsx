import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="container">
            <h1>Welcome! This is a movie site with navigation.</h1>
            <button onClick={() => navigate("/movies")}>View movies</button>
        </div>
    )
}

export default Home