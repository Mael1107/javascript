const loadButton = document.getElementById("charge")
const clearButton = document.getElementById("clear")
const userList = document.getElementById("list")
const count = document.getElementById("count")

clearButton.style.display = "none"
loadButton.addEventListener("click", async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        const filtered = data.filter(user => user.email.endsWith(".org"))
        
        filtered.forEach(user =>{
            const li = document.createElement("li")
            li.innerHTML = `Name: ${user.name} | Email: ${user.email}`
            userList.appendChild(li)
        })

        count.innerHTML = `Total Users (.org): ${filtered.length}`
        clearButton.style.display = "block"
        loadButton.style.display = "none"
    } catch (error) {
        console.log("ERROR! Please try again!")
    }
})

clearButton.addEventListener("click", () => {
    userList.innerHTML = ""
    count.innerHTML = ""
    clearButton.style.display = "none"
    loadButton.style.display = "block"
})