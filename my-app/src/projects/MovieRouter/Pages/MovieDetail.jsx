import { useParams, useNavigate } from "react-router-dom"

const movies = [
    { id: 1, title: "The Chosen", year: 2020 },
    { id: 2, title: "Spider-Man",year: 2002 },
    { id: 3, title: "Its raining hamburguer", year: 2009 },
    { id: 4, title: "Interstellar", year: 2014 },
]
const MovieDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const movie = movies.find(m => m.id === Number(id))

    if (!movie) return <h1>Movie not found!</h1>

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Year: {movie.year}</p>
            <button onClick={() => navigate("/movies")}>Return</button>
        </div>
    )
}


export default MovieDetail