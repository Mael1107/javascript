const ages = [5, 11, 18, 17, 10]
let agesOverTen = []
let sumAges = 0
let oldest = ages[0]
let youngest = ages[0]

for (const age of ages) {
    sumAges += age

    if (age > oldest) {
        oldest = age
    }
    
    if (age < youngest) {
        youngest = age
    }
    
    if (age > 10) {
        agesOverTen.push(age)
    }

}

let average = sumAges / ages.length

console.log(`The average of ages is: ${average.toFixed(1)}`)
console.log(`The oldest is: ${oldest}`)
console.log(`The youngest is: ${youngest}`)
console.log(`There are ${agesOverTen.length} ages greater than ten.`)

