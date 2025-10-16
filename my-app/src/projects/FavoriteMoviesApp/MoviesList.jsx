import { styles } from "./styles"

const MoviesList = ({movies, onRemoveMovie}) => {
    if (movies.length === 0) (
        <h3>Empty List.</h3>
    )

    return (
        <ul style={{listStyleType: "none"}}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <p>{movie.title}</p>
                    <button style={styles.buttonRemove} onClick={() => onRemoveMovie(movie.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}

export default MoviesList