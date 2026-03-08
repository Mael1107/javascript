import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Home</Link>
      <h1>About Pokedex</h1>
      <p>This is a Pokedex built with React and PokeAPI!</p>
    </div>
  );
}

export default About;