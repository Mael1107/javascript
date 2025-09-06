let favoriteNumbers = [1, 2, "amor", 7, 11]

console.log(`First term: ${favoriteNumbers[0]}`)
console.log(`Last term: ${favoriteNumbers[favoriteNumbers.length - 1]}`)
favoriteNumbers.shift()
console.log(`Removed first term.`)
console.log(favoriteNumbers)
console.log(`The item 11 is on position: ${favoriteNumbers.indexOf(11)}`)
console.log(`The item "love": ${favoriteNumbers.includes("love")}`)