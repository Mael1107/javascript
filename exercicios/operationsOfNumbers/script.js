const calculate = numbers => {
    const sum = numbers.reduce((acc, number) => acc + number,0)
    const average = sum / numbers.length
    let  max = numbers[0]
    let  min = numbers[0]
    for (const number of numbers) {
        if (min > number) {
            min = number
        }

        if (max < number) {
            max = number
        }
    }

    return {sum, average, max, min}
}

console.log(calculate([11, 9, 7, 1, 5]))

// const calculate = numbers => {
//     const sum = numbers.reduce((acc, n) => acc + n, 0);
//     const average = sum / numbers.length;
//     const max = Math.max(numbers);
//     const min = Math.min(numbers);

//     return { sum, average, max, min };
// };

// console.log(calculate([11, 9, 7, 1, 5]));