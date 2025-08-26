const ages = [5, 11, 18, 17, 10]
let sumAges = 0
let averageAges = 0
let oldest = ages[0]
let youngest = ages[0]

for (let i = 0; i < ages.length; i++) {
    let currentAge = ages[i]
    sumAges += currentAge

    if (currentAge > oldest) {
        oldest = currentAge
    }

    if (currentAge < youngest) {
        youngest = currentAge
    }
}

averageAges = sumAges / ages.length

console.log(`The average of ages is: ${averageAges.toFixed(1)}`)
console.log(`The oldest age is: ${oldest}`)
console.log(`The youngest age is: ${youngest}`)

