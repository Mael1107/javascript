button.addEventListener("click", Verify)

function Verify() {
    let date = new Date()
    let year = date.getFullYear()
    let birth = document.getElementById("birth").value
    let button = document.getElementById("button")
    let msg = document.getElementById("msg")
    let age = year - birth
    msg.innerHTML = `Your have ${age} years`
}