const fetchUsers = new Promise((resolve,reject) => {
    const users = [
        {name: "Ismael", age:18},
        {name:"Julianne", age: 17},
        {name:"David", age:22},
        {name:"Lucas", age:19}
    ]
    let success = true

    if (success) {
        resolve (users)
    } else {
        reject ("ERROR! Please try again!")
    }
})

async function showAdultUsers () {
    try {
        const user = await fetchUsers
        console.log(`Adult Users: ${user.filter(n => n.age >= 18).map(n => n.name).join(", ")}`)
    } catch (error) {
        console.log(error)
    }
}

showAdultUsers()

