// const calculateAverage = notes => {
//     let sum = 0
//     for (const note of notes) {
//         sum += note
//     }
//     return sum / notes.length
// }

// console.log(`The arithmetic average is: ${calculateAverage([8, 7, 9, 6]).toFixed(1)}`)

const calculateAverage = notes => notes.reduce((acc, note) => acc + note, 0) / notes.length
console.log(`The arithmetic average is: ${calculateAverage([8, 7, 9, 6]).toFixed(1)}`)