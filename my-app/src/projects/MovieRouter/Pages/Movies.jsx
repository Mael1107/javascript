import { useNavigate } from "react-router-dom"

const movies = [
    { id: 1, title: "The Chosen",year: 2020 },
    { id: 2, title: "Spider-Man",year: 2002 },
    { id: 3, title: "Its raining hamburguer", year: 2009 },
    { id: 4, title: "Interstellar", year: 2014 },
]

const Movies = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>🎬 Movies</h1>
            {movies.map(movie => (
                <div
                    key={movie.id}
                    onClick={() => navigate(`/movies/${movie.id}`)}
                    style={{cursor: "pointer", margin: "10px"}}
                >
                    <h2>{movie.title}</h2>
                </div>
            ))}
        </div>
    )
}


export default Movies