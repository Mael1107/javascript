import { useState } from "react"

const TodoItem = ({task, onRemove, onStartEdit, onSaveEdit, onCancelEdit}) => {

    const [editText, setEditText] = useState(task.text)

    if (!task.isEditing) {
        return (
            <li>
                <p style={{textAlign: "left", fontSize: "1.1em"}}>{task.text}</p>
                <button
                    onClick={() => onStartEdit(task.id)}
                >
                    Edit
                </button>
                <button
                    onClick={() => onRemove(task.id)}
                >
                    X
                </button>
            </li>
        )
    }

    return (
        <li>
            <input 
            type="text" 
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            />

            <div>

                <button
                    onClick={() => {
                        onSaveEdit(task.id, editText)
                        setEditText(task.text)
                    }}
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        onCancelEdit(task.id, editText)
                        setEditText(task.text)
                    }}
                >
                    Cancel
                </button>

            </div>
        </li>
    )

}

export default TodoItem