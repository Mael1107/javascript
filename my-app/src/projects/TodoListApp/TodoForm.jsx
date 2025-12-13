const TodoForm = ({inputValue, onInputChange, onSubmit, error}) => {
    return (
        <div>
            <form 
            style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", marginBottom: "20px"}} onSubmit={onSubmit}>
                <input 
                type="text" 
                value={inputValue}
                onChange={onInputChange}
                placeholder="Enter your task..."
                style={{
                    height: "30px",
                    width: "300px",
                    fontSize: "1.1em",
                    borderRadius: "3px",
                    border: "1px solid black",
                    padding: "5px"
                }}
                />
                <input
                type="submit" 
                value="Add" 
                style={{
                    width: "50px",
                    height: "42px",
                    fontSize: "1.1em"
                }}
                />
            </form>

            {error && (
                <h2 style={{textAlign: "center"}}>{error}</h2>
            )}
        </div>
    )
}

export default TodoForm