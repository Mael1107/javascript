const fetchUser = new Promise((resolve, reject) => {
    let success = true

    if (success) {
        resolve ({name: "Ismael", age: 18})
    } else {
        reject ("ERROR! Please try again!")
    }
})

async function showUser() {
    try {
        const user = await fetchUser
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

showUser()

// fetchUser
//     .then(notes => {
//         console.log(notes)
//     })
//     .catch(error => {
//         console.log(error)
//     })

