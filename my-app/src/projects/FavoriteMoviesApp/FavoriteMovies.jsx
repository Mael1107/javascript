import { useState } from "react";
import MoviesForm from "./MoviesForm";
import MoviesList from "./MoviesList";
const FavoriteMovies = () => {
    const [movies, setMovies] = useState([])
    const [nextId, setNextId] = useState(1)

    const AddMovie = (title) => {
        const newMovie = {
            id: nextId,
            title: title
        }

        setMovies([...movies, newMovie])
        setNextId(nextId + 1)
    }

    const RemoveMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id ))
    }

    return (
        <div>
            <h1>Add in list your favorite movies!</h1>
            <MoviesForm onAddMovie={AddMovie}/>
            <MoviesList movies={movies} onRemoveMovie={RemoveMovie}/>
        </div>
    )

}

export default FavoriteMovies