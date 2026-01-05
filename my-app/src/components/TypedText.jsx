import { useEffect, useState } from "react";

const TypedText = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        console.log(`Você digitou ${text}`);
    }, [text])

    return (
        <div>
            <input 
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px", 
                fontSize: "1.1em",
            }}
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here..."
            />
        </div>
    )
}

export default TypedText