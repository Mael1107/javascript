const TodoItem = ({task, onRemove}) => {
    return (
        <li>
            <p>{task.text}</p>
            <button
                onClick={() => onRemove(task.id)}
            >
                X
            </button>
        </li>
    )
}

export default TodoItem