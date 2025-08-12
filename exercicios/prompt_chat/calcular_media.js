function calcularMedia( nota1, nota2 ) {
    let soma = nota1 + nota2
    let media = soma / 2
    return media
}

let resultado = calcularMedia(9,7)
console.log(`Your average has: ${resultado}`)