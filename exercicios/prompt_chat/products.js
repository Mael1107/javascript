const products = [
    {name: "Shirt", price: 90.0},
    {name: "shorts", price: 60.0},
    {name: "pants", price: 110.0}
]

const productsHundrend = products
    .filter(product => product.price > 100)
    .map(product => product.name)

console.log(`Product name: ${productsHundrend}`);
