import MovieItem from "./MovieItem"

const MovieList = ({movies, onRemove, onStartEdit, onSaveEdit, onCancelEdit, onToggleWatched}) => {
    return (
        <div>
            {movies.length === 0 && (
                <p style={{textAlign: "center", marginTop: "2rem"}}>
                    No movies yet! Add your first one above 🎬
                </p>
            )}
            <ul className="movies-container">
                {movies.map(movie => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onRemove={onRemove}
                        onStartEdit={onStartEdit}
                        onSaveEdit={onSaveEdit}
                        onCancelEdit={onCancelEdit}
                        onToggleWatched={onToggleWatched}
                    />
                ))}
            </ul>
        </div>
    )
}

export default MovieList