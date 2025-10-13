import {useState} from "react"

const Counter = () => {

    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Null</button>
        </div>
    )
}

export default Counter