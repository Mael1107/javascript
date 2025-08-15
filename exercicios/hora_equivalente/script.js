
function Carregar() {
    let data = new Date()
    let hora = data.getHours()
    let image = document.getElementById("img-content")
    let paragraph = document.querySelector(".text-content p strong")
    paragraph.innerHTML = `${hora} horas.`
    if (hora >= 0 && hora < 12) {
        image.src = "manha.jpg"
    } else if (hora > 12 && hora <=18) {
        image.src = "tarde.jpg"
        document.body.style.backgroundColor = "rgba(158, 102, 50, 1)"
    } else {
        image.src = "noite.jpg"
        document.body.style.backgroundColor = "rgba(18, 9, 144, 1)"
    }
}