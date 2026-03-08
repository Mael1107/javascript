import { useEffect, useState } from "react"
import "./LikeButton.css"

const LikeButton = () => {
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("LikeButton Setted!")

        return () => {
            console.log("LikeButton disassembled!");
            
        }
    }, [])

    useEffect(() => {
        document.title = count > 0 ? `${count} tanned` : "no likes."
    }, [count])
    const toggleLike = () => {
        if (!like) {
            setCount(prev => prev + 1)
        }
        setLike(!like)
    }

    return (
        <div className="container">
            <h1>{count < 1 ? "No likes yet!" : count}</h1>
            <button
                onClick={toggleLike}
                className="btn"
                disabled={like}
            >
                {like ? `❤️tanned!`: "🤍Like"}
            </button>
            
            {like && (
                <button
                    onClick={() => {
                        setLike(false)
                        setCount(prev => prev - 1)
                    }}
                    className="btn"
                >
                    Undo
                </button>
            )}
        </div>
    )
}

export default LikeButton