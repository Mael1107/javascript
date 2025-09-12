async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(`Name of users: \n${data.map(n => n.name).join(", \n")}`)
    } catch (error) {
        console.log(error);
    }
}

getUsers()