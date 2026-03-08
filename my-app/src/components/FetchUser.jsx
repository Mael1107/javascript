import { useState, useEffect } from "react"

const RandomUser = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const fetchUser = async () => {
        try {
            setLoading(true)
            setError(null)
            
            const response = await fetch("https://randomuser.me/api/")
            const data = await response.json()
            
            setUser(data.results[0])
            setLoading(false)
        } catch (err) {
            setError("Error loading user")
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchUser()
    }, [])
    
    // ✅ RENDERIZAÇÃO CONDICIONAL
    if (loading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <h2>⏳ Loading...</h2>
            </div>
        )
    }
    
    if (error) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
                gap: "20px"
            }}>
                <h2 style={{color: "red"}}>❌ {error}</h2>
                <button 
                    onClick={fetchUser}
                    style={{padding: "10px 20px", fontSize: "16px"}}
                >
                    Try Again
                </button>
            </div>
        )
    }
    
    // ✅ MOSTRAR DADOS DO USUÁRIO
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5"
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                maxWidth: "400px"
            }}>
                {/* Foto */}
                <img 
                    src={user.picture.large}
                    alt={user.name.first}
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        marginBottom: "20px",
                        border: "4px solid #4CAF50"
                    }}
                />
                
                {/* Nome */}
                <h1 style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                    color: "#333"
                }}>
                    👤 {user.name.first} {user.name.last}
                </h1>
                
                {/* Email */}
                <p style={{
                    fontSize: "16px",
                    color: "#666",
                    marginBottom: "8px"
                }}>
                    📧 {user.email}
                </p>
                
                {/* Localização */}
                <p style={{
                    fontSize: "16px",
                    color: "#666",
                    marginBottom: "8px"
                }}>
                    🌍 {user.location.city}, {user.location.country}
                </p>
                
                {/* Telefone */}
                <p style={{
                    fontSize: "16px",
                    color: "#666",
                    marginBottom: "20px"
                }}>
                    📞 {user.phone}
                </p>
                
                {/* Botão Next User */}
                <button 
                    onClick={fetchUser}
                    style={{
                        padding: "12px 30px",
                        fontSize: "18px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    🔄 Next User
                </button>
            </div>
        </div>
    )
}

export default RandomUser