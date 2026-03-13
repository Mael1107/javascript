import { useState } from "react"

const MovieItem = ({movie, onRemove, onStartEdit, onSaveEdit, onCancelEdit, onToggleWatched}) => {
    const [editTitle, setEditTitle] = useState(movie.title)
    const [editGenre, setEditGenre] = useState(movie.genre)
    const [editRating, setEditRating] = useState(movie.rating)
    const [editWatched, setEditWatched] = useState(movie.watched)

    if (!movie.isEditing) {
        return (
            <div>
                <li className="movie-card">
                    <div className="info-movie">
                        <h3>{movie.title}</h3>
                        <p>{movie.genre}</p>
                        <p>{"⭐".repeat(movie.rating)}</p>
                        <p className={movie.watched ? "watched" : "no-watched"}>{movie.watched ? "Watched" : "No watched"}</p>
                    </div>
                    <div className="movie-button-group">
                        <button
                            onClick={() => onStartEdit(movie.id)}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onRemove(movie.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            </div>
        )
    }

    return (
        <div>
            <li className="edit-container">
                <input 
                type="text" 
                value={editTitle}
                placeholder="Enteredit- your new movie title"
                onChange={(e) => setEditTitle(e.target.value)}
                />
                <input 
                type="text" 
                value={editGenre}
                placeholder="Enteredit- your new movie genre"
                onChange={(e) => setEditGenre(e.target.value)}
                />
                <input 
                type="range" 
                value={editRating}
                min="1"
                max="6"
                step="1"
                onChange={(e) => setEditRating(Number(e.target.value))}
                />
                <input 
                type="button" value={editWatched ? "Not watched" : "Watched"}
                onClick={() => setEditWatched(prev => !prev)}
                style={{width: "150px", alignSelf: "center"}}
                />
                <div className="edit-button-group">
                    <button
                        onClick={() => onSaveEdit(movie.id, editTitle, editGenre, editRating, editWatched)}
                    >
                        Save
                    </button>
                    <button
                        onClick={() => onCancelEdit(movie.id)}
                    >
                        Cancel
                    </button>
                </div>
            </li>
        </div>
    )
}

export default MovieItem