// Atividade do Claude (1B)
import { useState } from "react";

const SmartCounter = () => {
    const [count, setCount] = useState(0)

    const handleDecrease = () => {
        setCount(count > 0 ? count - 1 : 0)
    }

    const color = count === 0 ? "red"
        : count === 10 ? "gold"
        : "green"
    
    return (
        <div style={{display: "flex", flexFlow: "column nowrap", justifyContent: "center", alignItems: "center"}}>
            <p style={{color: color, fontSize: "1.3em"}}>{count}</p>
            <div style={{display: "flex", gap: "5px", fontSize: "1.3em"}}>
                <button disabled={count === 0} onClick={handleDecrease}>-1</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(prev => prev + 1) }>+1</button>
            </div>
        </div>
    )
}

export default SmartCounter