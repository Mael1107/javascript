async function getUsers() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    const filtered = data
    .filter(user => user.name.startsWith("C"))
    .map(user => `Name: ${user.name} E-mail: ${user.email}`)
    .join(", \n")
    console.log(`Users whose names start with the letter "C": \n${filtered}`)
}

getUsers()