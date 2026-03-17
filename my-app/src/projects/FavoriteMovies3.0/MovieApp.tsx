import { useState, useEffect } from "react"
import MovieForm from "./components/MovieForm"
import MovieList from "./components/MovieList"
import {Movie} from "./types"


const API_URL = "http://localhost:3000/api/v1/movies"

const MovieApp = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)  
    const [error, setError] = useState<string>("")
    const [inputTitle, setInputTitle] = useState<string>("")
    const [inputGenre, setInputGenre] = useState<string>("")
    const [inputRating, setInputRating] = useState<number>(0)

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async (): Promise<void> => {
        try {
        setLoading(true)
        const response = await fetch(API_URL)
        const data: Movie[] = await response.json()
        setMovies(data)
        } catch (err) {
        setError("Failed to load movies!")
        } finally {
        setLoading(false) 
        }
    }

    const handleAddMovie = async (e:React.FormEvent<HTMLFormElement>): Promise<void> => {
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

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                movie : {
                    title: inputTitle,
                    genre: inputGenre,
                    rating: inputRating,
                    watched: false
                }
            })
        })

        const newMovie = await response.json()

        setMovies([...movies, newMovie])
        setInputTitle("")
        setInputGenre("")
        setInputRating(0)
        setError("")
    }

    const handleRemoveMovie = async (id: number): Promise<void> => {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
        setMovies(movies.filter(movie => movie.id !== id))
    }

    const handleToggleWatched =  async (id: number) => {
        const movie = movies.find(m => m.id === id)
        if (!movie) return
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                movie: {watched: !movie.watched}
            })
        })
        const updated = await response.json()

        setMovies(movies.map(movie => 
            movie.id === id
                ? {...updated, isEditing: false}
                : movie
        ))
    }

    const handleStartEdit = (id: number) => {
        setMovies(movies.map(movie => 
            movie.id === id 
                ? {...movie, isEditing: true}
                : movie
        ))
    }

    const handleCancelEdit = (id: number) => {
        setMovies(movies.map(movie => 
            movie.id === id
                ? {...movie, isEditing: false}
                : movie
        ))
    }

    const handleSaveEdit = async (id: number, newTitle: string, newGenre: string, newRating: number, newWatched: boolean): Promise<void> => {
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

        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                movie: {
                    title: newTitle,
                    genre: newGenre,
                    rating: Number(newRating),
                    watched: newWatched
                }
            })
        })

        const updated = await response.json()

        setMovies(movies.map(movie => 
            movie.id === id
                ? {...updated, isEditing: false}
                : movie
        ))
    }

    const handleInputChange = (field: string, value: string | number): void => {
        if (field === "title") {
            setInputTitle(value as string)
        } else if (field === "genre") {
            setInputGenre(value as string)
        } else {
            setInputRating(value as number)
        }

        if (error) setError("")
    }

    if (loading) return <p>Loading movies...</p>

    return (
        <div className="movieapp-component">
        <h1>FavoriteMovies App</h1>
        <MovieForm 
            inputTitle={inputTitle}
            inputGenre={inputGenre}
            inputRating={inputRating}
            onSubmit={handleAddMovie}
            onChange={handleInputChange}
            error={error}
        />
        <MovieList 
            movies={movies}
            onRemove={handleRemoveMovie}
            onStartEdit={handleStartEdit}
            onSaveEdit={handleSaveEdit}
            onCancelEdit={handleCancelEdit}
            onToggleWatched={handleToggleWatched}
        />
        <p className="counting-info">
            Total: {movies.length} movie{movies.length !== 1 ? "s" : ""} || 
            Watched: {movies.filter(m => m.watched).length}
        </p>
        </div>
    )
}

export default MovieApp