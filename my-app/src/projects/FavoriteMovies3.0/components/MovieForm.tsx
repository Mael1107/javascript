interface MovieFormProps  {
    inputTitle: string,
    inputGenre: string,
    inputRating: number,
    onChange: (field: string, value: string | number) => void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    error: string
}


const MovieForm = ({
    inputTitle,
    inputGenre,
    inputRating,
    onChange,
    onSubmit,
    error
}: MovieFormProps) => {
    return (
        <div>
            <form className="form-container" onSubmit={onSubmit} >
                <input 
                type="text" 
                value={inputTitle}
                onChange={(e) => onChange("title", e.target.value)}
                placeholder="Enter here movie title..."
                className="input-form"
                />
                <input 
                type="text"
                value={inputGenre}
                onChange={(e) => onChange("genre", e.target.value)}
                placeholder="Enter here movie genre..."
                className="input-form"
                />
                <input 
                type="range"
                value={inputRating}
                onChange={(e) => onChange("rating", Number(e.target.value))}
                min="0"
                max="6"
                step="1"
                
                />
                <input type="submit" value="Complete" className="btn-submit"/>

                {error && <p style={{fontSize: "0.9em"}}>{error}</p>}

            </form>
        </div>
    )
}

export default MovieForm