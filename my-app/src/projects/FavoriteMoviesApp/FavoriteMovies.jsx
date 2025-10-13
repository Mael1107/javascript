import { useState } from "react"

const FavoriteMovies = () => {
    const [movie, setMovie] = useState("")
    const [movies, setMovies] = useState([])

    const style = {
        container: {
            textAlign: "center",
            backgroundColor: "gray",
            padding: "10px",
        },

        buttonRemove: {
            backgroundColor: "red",
            padding: "10px",
            outline: "none",
            border: "none",
            cursor: "pointer",
        },

        inputMain: {
            padding: "5px",
            width: "165px",
            marginRight: "5px", 

        }
    }
    
    const AddMovie = (event) => {
        event.preventDefault()
        if (movie.trim() === "") {
            alert("Error! Please fill in correctly and try again!")
        } else {
            setMovies([...movies, movie])
            setMovie("")
        }
    }

    const RemoveMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index))
    }


    return (
        <>
            <div style={style.container}>
                <h1>Add in list your favorite Movies!</h1>
                <form action="" onSubmit={AddMovie}>
                    <input
                    style={style.inputMain}
                    type="text"
                    value={movie}
                    onChange={(event) => setMovie(event.target.value)}
                    placeholder="Ex: The Chosen: The Movie"
                    />
                    <input style={{padding: "5px", fontSize: "1em"}} type="submit" value="Add" />
                </form>
                
                {movies.length === 0 ? (
                    <h3>Empty List.</h3>
                ) : (
                    movies.map((n, i) => (
                        <div key={i}>
                            <li>{n}</li>
                            <button style={style.buttonRemove} onClick={() => RemoveMovie(i)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default FavoriteMovies

