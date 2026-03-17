import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Movies from "./pages/Movies";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./Context/ThemeContext";

const MovieRouterApp = () => {
    return (
        <div>
            <ThemeProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/movies" element={<Movies />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<h1>Page can not found!</h1>}/>
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default MovieRouterApp