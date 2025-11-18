// Atividade do Chat
import {useState} from "react"

const CompleteName = () => {
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")

    return (
        <>
            <div>
                <p style={{textAlign:"center" }}>{`${name} ${lastname}`}</p>
                <form style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px"
                }}>
                    <label htmlFor="iname">What is your name?</label>

                    <input 
                    type="text" 
                    name="iname" 
                    id="iname" 
                    value={name}
                    onChange={({target}) => setName(target.value)}/>

                    <label htmlFor="ilastname">What is your lastname?</label>

                    <input 
                    type="text" 
                    name="ilastname" 
                    id="ilastname"
                    value={lastname}
                    onChange={({target}) => setLastName(target.value)}
                    />
                </form>

            </div>
        </>
    )
}

export default CompleteName