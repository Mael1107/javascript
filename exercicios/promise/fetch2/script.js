async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    const nameEmail = data.map(user =>({name: user.name, email: user.email}))
    console.log(nameEmail)
}

getUsers()