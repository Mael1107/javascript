let button = document.getElementById("button")
button.addEventListener("click", Verify)

function Verify() {

    let birthValue = document.getElementById("birth").value.trim()
    let date = new Date()
    let year = date.getFullYear()
    let msg = document.getElementById("msg")

    if (birthValue.length === 0 || Number(birthValue) > year || Number.isNaN(birthValue))  {
        msg.style.display = "block"
    } else {
        let sex = document.getElementsByName("sexo")
        let gender = null          
        let birth = Number(birthValue)
        let age = year - birth
        msg.innerHTML = `You have ${age} years`
        msg.style.display = "block"
        let img = document.createElement("img")
        img.setAttribute("id", "image")

        if (sex[0].checked) {
            gender = "Man"
            img.setAttribute("src", "images/homem.jpg")
        } else {
            gender = "Woman"
            img.setAttribute("src", "images/mulher.jpg")
        }
        
        msg.innerHTML = `You are an ${age}-year-old ${gender}`
        msg.appendChild(img)
    }

}