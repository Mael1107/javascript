import { useState, useEffect } from "react"

const TitleCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
            <button style={{padding: "10px", fontSize: "1.1em"}} onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button style={{padding: "10px", fontSize: "1.1em"}} onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        
        </div>
    )
}

export default TitleCounter