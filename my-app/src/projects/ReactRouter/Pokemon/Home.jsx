import { Link } from "react-router-dom";

function Home() {
  const pokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pokedex</h1>
      <Link to="/about" style={{ marginBottom: "20px", display: "block" }}>
        About
      </Link>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {pokemons.map((id) => (
          <Link
            key={id}
            to={`/pokemon/${id}`}
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              textDecoration: "none",
              color: "black",
              textAlign: "center",
              border: "2px solid #ddd",
            }}
          >
            Pokemon #{id}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;