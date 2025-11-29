import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [nextId, setNextId] = useState(1)
    const [error, setError] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault()
        
        if (inputValue.trim() === "") {
            setError("⚠️ Task cannot be empty! Please fill in correctly and try again!")
            return 
        }

        const newTask = {
            id: nextId,
            text: inputValue
        }

        setInputValue("")
        setNextId(nextId + 1)
        setTasks([...tasks, newTask])
        setError("")
    }

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        if (error) setError("")
    }

    return (
        <div>
            <h1>My TodoApp!</h1>
            <TodoForm
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onSubmit={handleAddTask}
                error={error}
            />
            <TodoList
                tasks={tasks}
                onRemove={handleRemoveTask}
            />
            <p>
                Total: {tasks.length} task{tasks.length !== 1 ? "s" : ""}
            </p>
        </div>
    )

}

export default TodoApp
