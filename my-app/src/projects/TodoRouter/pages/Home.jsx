import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()

    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h1>Welcome to TodoApp</h1>
            <p>organize your tasks simply</p>
            <button onClick={() => navigate("tasks")}>View tasks →</button>
        </div>
    )
}
export default Home