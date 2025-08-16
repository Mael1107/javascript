let button = document.getElementById("button")
button.addEventListener("click", Verify)

function Verify() {

    let birthValue = document.getElementById("birth").value.trim()
    let date = new Date()
    let year = date.getFullYear()
    let msg = document.getElementById("msg")
    let sex = document.getElementsByName("sexo")

    if (birthValue.length === 0 || Number(birthValue) > year || Number.isNaN(birthValue))  {
        msg.style.display = "block"
    } else {
        let birth = Number(birthValue)
        let age = year - birth
        msg.innerHTML = `You have ${age} years`
        msg.style.display = "block"
    }

}