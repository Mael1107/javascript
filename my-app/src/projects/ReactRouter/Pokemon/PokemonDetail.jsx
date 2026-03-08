import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [id]);

  if (loading) return <h2 style={{ padding: "20px" }}>Loading Pokemon...</h2>;
  if (!pokemon) return <h2 style={{ padding: "20px" }}>Pokemon not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Home</Link>
      <h1 style={{ textTransform: "capitalize" }}>
        {pokemon.name} #{pokemon.id}
      </h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        <h3>Types:</h3>
        {pokemon.types.map((type) => (
          <span key={type.type.name} style={{ marginRight: "10px" }}>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetail;