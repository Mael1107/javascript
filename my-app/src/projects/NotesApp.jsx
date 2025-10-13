import {useState} from "react"

const AppNote = () => {
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])

    const AddNote = (e) => {
        e.preventDefault()
        if (note.trim() === "") {
            alert("Error! Please fill in correctly and try again!")
        } else {
            setNotes([...notes, note])
            setNote("")
        }
    }

    const RemoveNote = (index) => {
        setNotes(notes.filter((_,i) => i != index))
    }

    return (
        <>
            <div>
                <h1>NotesApp</h1>
                <form action="" onSubmit={AddNote}>
                    <input
                    type="text"
                    onChange={(e) => setNote(e.target.value)}
                    value={note}
                    placeholder="Type something..."
                    />
                    <input type="submit" value="Send" />
                </form>

                <ul>
                    {notes.map((n,i) => (
                        <div key={i}>
                            <li>{n}</li>
                            <button onClick={() => RemoveNote(i)}>Remove</button>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default AppNote