import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import NavBar from "./components/NavBar"

const TodoRouterApp = () => {
    return (
        <div>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default TodoRouterApp

