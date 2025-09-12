export function sumArray(arr) {
    return arr.reduce((acc, current) => acc + current, 0)
}

export function maxArray(arr) {
    let max = arr[0]
    arr.forEach(value => {
        if (max < value) {
            max = value
        }
    })
    return max
}

export default function minArray(arr) {
    let min = arr[0]
    arr.forEach(value => {
        if (min > value) {
            min = value
        }
    })
    return min
}

export const authorArray = "Array methods module"

export function averageArray(arr) {
    return sumArray(arr) / arr.length
}