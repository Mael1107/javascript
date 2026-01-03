import { useState } from "react";
import { styles } from "./styles";

const MoviesForm = ({onAddMovie}) => {
    const [inputValue, setInputValue] = useState("")
    
    const HandleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim() === "") {
            alert("Error! Please fill in correctly and try again!")
            return
        }

        onAddMovie(inputValue)
        setInputValue("")
    }

    return (
        <form onSubmit={HandleSubmit}>
            <div style={
                {display: "flex",
                flexFlow: "column nowrap", 
                justifyContent: "center", 
                alignItems: "center",
                gap: "2px"
                }}>
                <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ex: The Chosen..."
                style={styles.inputMain}
                />
                <input
                type="submit"
                value="Add"
                style={{padding: "10px", width: "182px"}}
                />
            </div>
        </form>
    )
}

export default MoviesForm