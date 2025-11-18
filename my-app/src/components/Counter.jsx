import {useState} from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div style =
        {{
            display: "flex", 
            flexFlow: "column nowrap", 
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: "5px"
        }}>
            <h2>
                <p>Counter: {count}</p>
                <div style={{display: "flex", flexFlow: "column nowrap", gap: "5px"}}>
                    <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
                    <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
                    <button onClick={() => setCount(0)}>Null</button>
                </div>
            </h2>
        </div>
    )
}

export default Counter

