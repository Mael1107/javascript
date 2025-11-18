// Atividade do Claude (1C)
import { useState } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])
    const [nextId, setNextId] = useState(1)

    const handleAddTask = (e) => {
        e.preventDefault()
        if (inputValue.trim() === "") {
            alert("ERROR! Please fill in correctly and try again!")
            return
        }
        const newTask = {
            text: inputValue,
            id: nextId
        }

        setNextId(nextId + 1)
        setTasks([...tasks, newTask])
        setInputValue("")
    }

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
        
    }

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input 
                type="text" 
                value={inputValue}
                onChange={({target}) => setInputValue(target.value)}
                placeholder="Enter your task here..."
                />
                <input type="submit" value="Add"/>
            </form>

            {tasks.length === 0 && (
                <p>No predefined tasks.</p>
            )}

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}> 
                        <div>
                            <p>{task.text}</p>
                            <button onClick={() => handleRemoveTask(task.id)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p>{tasks.length} task(s) added.</p>
        </div>
    )
}

export default TodoList