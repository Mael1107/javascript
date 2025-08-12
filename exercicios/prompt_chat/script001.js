function calculateDiscount(price, percentage) {
    const discountRate = percentage / 100
    let finalPrice = price * ( 1 - discountRate )
    return finalPrice.toFixed(2)
}

let result = calculateDiscount(100 , 10)
console.log(`The final price, after the discount, is: ${result}`)