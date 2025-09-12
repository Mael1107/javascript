async function getData() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    const filtered = data
    .filter(user => user.id <= 5)
    .map(user => {
        return {name: user.name, email: user.email, id:user.id}
    })
    .slice(0,3)

    const sum = filtered.reduce((acc, user) => acc + user.id, 0)
    const average = sum / filtered.length
    console.log("Users:", filtered)
    console.log(`Sum of Id´s: ${sum.toFixed(1)}`)
    console.log(`Average of Id´s: ${average.toFixed(1)}`)
}

getData()