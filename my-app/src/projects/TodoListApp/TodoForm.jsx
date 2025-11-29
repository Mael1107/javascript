const TodoForm = ({inputValue, onInputChange, onSubmit, error}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                value={inputValue}
                onChange={onInputChange}
                placeholder="Enter your task..."
                />
                <input type="submit" value="Add" />
            </form>

            {error && (
                <h2>{error}</h2>
            )}
        </div>
    )
}

export default TodoForm