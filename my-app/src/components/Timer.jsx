import { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {
        let timer = null

        if (isRunning) {
            timer = setInterval(() => {
                setSeconds(prev => prev + 1)
            }, 1000)
        }

        return () => {
                if (timer) {
                    clearInterval(timer)
                }
            }

    }, [isRunning])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "50px"
        }}>
            <h1 style={{fontSize: "72px"}}>
                ⏱️ {seconds}s
            </h1>
            
            <div style={{display: "flex", gap: "10px"}}>
                <button 
                    onClick={() => setIsRunning(!isRunning)}
                    style={{padding: "10px 20px", fontSize: "18px"}}
                >
                    {isRunning ? "⏸️ Stop" : "▶️ Start"}
                </button>
                
                <button 
                    onClick={() => {
                        setSeconds(0)
                        setIsRunning(false)
                    }}
                    style={{padding: "10px 20px", fontSize: "18px"}}
                >
                    🔄 Reset
                </button>
            </div>
        </div>
    )
}

export default Timer