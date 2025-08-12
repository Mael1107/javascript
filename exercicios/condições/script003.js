let age = 18
if (age < 16) {
    console.log(`You do not vote! `)
} else if ( age < 18 || age >= 65) {
    console.log(`Optional Vote!`)
} else {
    console.log("You vote is mandatory!")
}