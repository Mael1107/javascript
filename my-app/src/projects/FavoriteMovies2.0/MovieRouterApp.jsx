import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Movies from "./pages/Movies";
import NavBar from "./components/NavBar";

const MovieRouterApp = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movies" element={<Movies />}/>
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<h1>Page can not found!</h1>}/>
            </Routes>
        </div>
    )
}

export default MovieRouterApp