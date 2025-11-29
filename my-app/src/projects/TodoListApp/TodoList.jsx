import TodoItem from "./TodoItem";

const TodoList = ({tasks, onRemove}) => {
    if (tasks.length === 0 ) {
        return (
            <p>No tasks! Add one above!</p>
        )
    }

    return (
        <ul>
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    )
}

export default TodoList