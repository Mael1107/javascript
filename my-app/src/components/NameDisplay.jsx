import {useState} from "react"

const Display = () => {
    const [name, setName] = useState("Visitor") 
    return (
        <div>
            {/* Calling the state variable created by useState */}
            <p>Hello, {name}</p>
        </div>
    )
}

export default Display