const users = [
  { name: "Ismael", age: 18 },
  { name: "Julianne", age: 17 },
  { name: "David", age: 22 },
  { name: "Half", age: 7 },
  { name: "Lucas", age: 19 }
]

const userName = users.map(user => user.name)
console.log(userName)

const userMajor = users.filter(user => user.age >= 18)
console.log(userMajor);

const user3 = users.slice(0, 3)
console.log(user3);

let userNameMajor = users.filter(user => user.age >= 18).map(user => user.name)
console.log(userNameMajor);


