favoriteNumbers = [1, 2, "amor", 7, 11]

console.log(`Firt term: ${favoriteNumbers[0]}`)
console.log(`Last term: ${favoriteNumbers[favoriteNumbers.length - 1]}`)
favoriteNumbers.shift()
console.log(`Removed first term.`)
console.log(favoriteNumbers)
console.log(`The item 11 are on position: ${favoriteNumbers.indexOf(11)}`)