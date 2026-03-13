import { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import "./styles/MovieApp.css"

const STORAGE_KEYS = {
    movies: "movies",
    nextId: "nextId"
}

const MovieApp = () => {
    const [movies, setMovies] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.movies)
        return saved ? JSON.parse(saved) : []
    })

    const [nextId, setNextId] = useState(() => {
        const id = localStorage.getItem(STORAGE_KEYS.nextId)
        return id ? JSON.parse(id) : 1
    })

    const [inputTitle, setInputTitle] = useState("")
    const [inputGenre, setInputGenre] = useState("")
    const [inputRating, setInputRating] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.movies, JSON.stringify(movies))
    }, [movies])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.nextId, JSON.stringify(nextId))
    }, [nextId])

    const handleAddMovie = (e) => {
        e.preventDefault()

        if (inputTitle.trim() === "") {
            setError("Please fill in the field correctly and try again!")
            return
        }

        if (inputGenre.trim() === "") {
            setError("Please fill in the field correctly and try again!")
            return
        }

        if (inputRating <= 0 || inputRating > 5) {
            setError("Please fill in the field correctly and try again!")
            return
        }

        const newMovie = {
            id: nextId,
            title: inputTitle,
            genre: inputGenre,
            rating: inputRating,
            watched: false,
            isEditing: false
        }

        setInputTitle("")
        setInputGenre("")
        setInputRating(0)
        setMovies([...movies, newMovie])
        setError("")
        setNextId(prev => prev + 1)
    }

    const handleInputChange = (field, value) => {
        if (field === "title") {
            setInputTitle(value)
        } else if (field === "genre") {
            setInputGenre(value)
        } else {
            setInputRating(value)
        }

        if (error) setError("")
    }

    const handleRemoveMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id))
    }

    const handleStartEdit = (id) => {
        setMovies(movies.map(movie => 
            movie.id === id
                ? {...movie, isEditing: true}
                : movie
        ))
    }

    const handleSaveEdit = (id, newTitle, newGenre, newRating, newWatched) => {
        if (newTitle.trim() === "") {
            alert("⚠️ Movie title cannot be empty!")
            return
        }

        if (newGenre.trim() === "") {
            alert("⚠️ Movie genre cannot be empty!")
            return
        }

        if (newRating <= 0 || newRating > 5) {
            alert("⚠️ Movie rating invalid! Must be between or equal 0 and 5")
            return
        }

        setMovies(movies.map(movie => 
            movie.id === id
                ? {...movie, 
                    title: newTitle,
                    genre: newGenre,
                    rating: newRating,
                    isEditing: false,
                    watched: newWatched
                }
                : movie
        ))
    }
    
    const handleCancelEdit = (id) => {
        setMovies(movies.map(movie => 
            movie.id === id
                ? {...movie, isEditing: false}
                : movie
        ))
    }

    const handleToggleWatched = (id) => {
        setMovies(movies.map(movie => 
            movie.id === id
                ? {...movie, watched: !movie.watched}
                : movie
        ))
    }


    return (
        <div className="movieapp-component">
            <h1>FavoriteMovies App</h1>
            <MovieForm 
                inputTitle = {inputTitle}
                inputGenre = {inputGenre}
                inputRating = {inputRating}
                onSubmit = {handleAddMovie}
                onChange = {handleInputChange}
                error = {error}
            />
            <MovieList 
                movies={movies}
                onRemove={handleRemoveMovie}
                onStartEdit={handleStartEdit}
                onSaveEdit={handleSaveEdit}
                onCancelEdit={handleCancelEdit}
                onToggleWatched={handleToggleWatched}
            />
            <p className="counting-info">Total: {movies.length} movie{movies.length > 1 ? "s" : ""} || Watched total: {movies.filter(movie => movie.watched).length}  </p>
        </div>
    )
}

export default MovieApp