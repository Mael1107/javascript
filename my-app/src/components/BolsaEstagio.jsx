import { useState } from "react"

const BolsaEstagio = () => {
    const [dias, setDias] = useState(0)
    const [valordaBolsa, setValordaBolsa] = useState(0)
    const [horasEstagiadas, setHorasEstagiadas] = useState(0)
    const [mostrarResultado, setMostrarResultado] = useState(false)

    const styles = {
        container: {
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
            justifyContent: "center"
        },

        form: {
            display: "flex",
            flexFlow: "column nowrap",
            gap: "5px"
        },

        h2: {
            display: mostrarResultado ? "block" : "none",
        },
    }

    const valores = {
        valeTransporte: 9.0,
        valorHoraEstagio: 5.083,
        horasPorDia: 4.0
    }


    const Calcular = (e) => {
        e.preventDefault()
        if (dias === 0) {
            alert("Erro! Por favor preencha corretamente e tente novamente!")
        } else { 
            const horas = valores.horasPorDia * dias
            const bolsa = ((horas * valores.valorHoraEstagio) + (valores.valeTransporte * dias))
            setHorasEstagiadas(horas)
            setValordaBolsa(bolsa)
            setMostrarResultado(true)
            setDias(0)
        }
    }

    return (
        <>
            <div style={styles.container}>
                <h1>Veja quanto você vai ganhar nesse mês!</h1>
                <form action="" onSubmit={Calcular}>
                    <div style={styles.form}>
                        <input
                        type="number"
                        min= "1"
                        value={dias}
                        onChange={(event) => setDias(Number(event.target.value))}
                        placeholder="Quantos dias você estagiou nesse mês"
                        />
                        <input type="submit" value="Calcular"/>
                    </div>
                </form>

                <h2 style = {styles.h2}>
                    Você estagiou {horasEstagiadas / valores.horasPorDia} dias ({horasEstagiadas} horas) e receberá aproximadamente 
                    {" "} <strong>R${valordaBolsa.toFixed(2)}</strong>
                </h2>

            </div>
        </>
    )
}

export default BolsaEstagio