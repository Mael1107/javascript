import TodoItem from "./TodoItem";

const TodoList = ({tasks, onRemove, onStartEdit, onSaveEdit, onCancelEdit}) => {
    if (tasks.length === 0 ) {
        return (
            <p style={{textAlign: "center", fontSize: "1.1em"}}>No tasks! Add one above!</p>
        )
    }

    return (
        <ul style={{display: "flex", flexFlow: "column nowrap", alignItems: "stretch"   , width: "500px", margin: "auto"}}>
            {tasks.map(task => (
                <TodoItem
                    key = {task.id}
                    task = {task}
                    onRemove = {onRemove}
                    onStartEdit = {onStartEdit}
                    onSaveEdit = {onSaveEdit}
                    onCancelEdit = {onCancelEdit}
                />
            ))}
        </ul>
    )
}

export default TodoList