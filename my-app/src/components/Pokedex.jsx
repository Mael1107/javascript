import { useState, useEffect } from "react"

const Pokedex = () => {
    const [pokemon, setPokemon] = useState(null)
    const [pokemonId, setPokemonId] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const fetchPokemon = async (id) => {
        try {
            setLoading(true)
            setError(null)
            
            // ✅ URL correta com ID
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            
            // ✅ Salva objeto completo
            setPokemon(data)
            setLoading(false)
        } catch (err) {
            setError("Error loading pokemon")
            setLoading(false)
        }
    }
    
    // ✅ Array de dependências correto
    useEffect(() => {
        fetchPokemon(pokemonId)  // ← Passa pokemonId
    }, [pokemonId])  // ← Executa quando pokemonId mudar
    
    // ✅ Lógica correta
    const handlePrevious = () => {
        if (pokemonId > 1) {
            setPokemonId(prev => prev - 1)
        }
    }
    
    const handleNext = () => {
        if (pokemonId < 1000) {
            setPokemonId(prev => prev + 1)
        }
    }
    
    // Adicionar função Random
    const handleRandom = () => {
        const randomId = Math.floor(Math.random() * 1000) + 1
        setPokemonId(randomId)
    }
    
    if (loading) return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <h2>⏳ Loading Pokemon...</h2>
        </div>
    )
    
    if (error) return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <h2>❌ {error}</h2>
        </div>
    )
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f0f0f0"
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                maxWidth: "500px"
            }}>
                {/* Nome e ID */}
                <h1 style={{
                    fontSize: "36px",
                    textTransform: "capitalize",
                    marginBottom: "20px",
                    color: "#333"
                }}>
                    {pokemon.name} #{pokemon.id}
                </h1>
                
                {/* Imagem */}
                <img 
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    style={{
                        width: "200px",
                        height: "200px",
                        imageRendering: "pixelated"
                    }}
                />
                
                {/* Tipos */}
                <div style={{
                    marginBottom: "15px",
                    fontSize: "18px"
                }}>
                    <strong>Type: </strong>
                    {pokemon.types.map((typeInfo, index) => (
                        <span 
                            key={index}
                            style={{
                                backgroundColor: "#4CAF50",
                                color: "white",
                                padding: "5px 15px",
                                borderRadius: "20px",
                                marginLeft: "5px",
                                textTransform: "capitalize"
                            }}
                        >
                            {typeInfo.type.name}
                        </span>
                    ))}
                </div>
                
                {/* Altura e Peso */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "20px"
                }}>
                    <div>
                        <strong>Height:</strong> {pokemon.height} dm
                    </div>
                    <div>
                        <strong>Weight:</strong> {pokemon.weight} hg
                    </div>
                </div>
                
                {/* Habilidades */}
                <div style={{
                    marginBottom: "25px",
                    textAlign: "left"
                }}>
                    <strong>Abilities:</strong>
                    <ul style={{
                        listStyle: "none",
                        padding: 0
                    }}>
                        {pokemon.abilities.map((abilityInfo, index) => (
                            <li 
                                key={index}
                                style={{
                                    backgroundColor: "#f5f5f5",
                                    padding: "8px",
                                    margin: "5px 0",
                                    borderRadius: "5px",
                                    textTransform: "capitalize"
                                }}
                            >
                                {abilityInfo.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Botões */}
                <div style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center"
                }}>
                    <button 
                        onClick={handlePrevious}
                        disabled={pokemonId === 1}
                        style={{
                            padding: "12px 20px",
                            fontSize: "16px",
                            backgroundColor: pokemonId === 1 ? "#ccc" : "#2196F3",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: pokemonId === 1 ? "not-allowed" : "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        ⬅️ Previous
                    </button>
                    
                    <button 
                        onClick={handleRandom}
                        style={{
                            padding: "12px 20px",
                            fontSize: "16px",
                            backgroundColor: "#FF9800",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        🎲 Random
                    </button>
                    
                    <button 
                        onClick={handleNext}
                        disabled={pokemonId === 1000}
                        style={{
                            padding: "12px 20px",
                            fontSize: "16px",
                            backgroundColor: pokemonId === 1000 ? "#ccc" : "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: pokemonId === 1000 ? "not-allowed" : "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Next ➡️
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokedex