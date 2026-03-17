import { useTheme } from "../Context/ThemeContext"
import MovieApp from "../MovieApp"

const Movies = () => {
    const {dark} = useTheme()
    return (
    <div className={`movies-page ${dark ? "dark" : ""}`}>
        <MovieApp />
    </div>
)
}

export default Movies