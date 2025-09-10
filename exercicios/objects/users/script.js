const users = [
    {name: "Ismael", age: 18, skills: ["Dating", "Develop"]},
    {name: "Julianne", age: 18, skills: ["Dating", "Interlocking toes"]},
    {name: "Half", age: 7, skills: ["Shitting", "Sleep"]}
]

const usersJSON = JSON.stringify(users)
console.log(usersJSON)

const objusers = JSON.parse(usersJSON)
console.log(objusers[1].name);
console.log(objusers[2].skills[0]);

