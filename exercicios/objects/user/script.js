const user = {
    name: "Ismael",
    age: 18,
    skills: ["Develog", "Dating"]
}

const userJSON = JSON.stringify(user)
console.log(userJSON);

const objUser = JSON.parse(userJSON)
console.log(objUser.name)
