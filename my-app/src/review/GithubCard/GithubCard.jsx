import { useEffect, useState } from "react";
import "./GithubCard.css"

const GithubCard = () => {
    const [users, setUsers] = useState([null])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("Component Setted!");
        
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://api.github.com/users/Mael1107")
                const data = await response.json()
                setUsers(data)
            } catch (err) {
                setError("Error!")
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>

    return (
        <div className="card">
            <img className="avatar" src={users.avatar_url} alt={users.name}/>
            <h2>{users.name}</h2>
            <h2>{users.bio}</h2>
            <h2>{users.public_repos} Public Repos</h2>
        </div>
    )
}

export default GithubCard