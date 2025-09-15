class Product {
    constructor(name, price, amount) {
        this.name = name
        this.price = price
        this.amount = amount
    }

    calculateTotal () {
        return this.price * this.amount
    }
}


class DigitalProduct extends Product {
    constructor(name, price, amount, format) {
        super(name,price,amount)
        this.format = format
    }

    calculateTotal() {
        return (this.price * this.amount) * 0.9
    }
}

class Cart {
    constructor() {
        this.items = []
    }

    add(product) {
        this.items.push(product)
    }

    getTotal() {
        let total = 0
        for(const product of this.items) {
            total += product.calculateTotal()
        }
        return total
    }

    listItems() {
        this.items.forEach(product => {
            console.log(`- ${product.name} (${product.amount}x)`);
            
        })
    }
}


const p1 = new Product("Shirt", 90.00, 5)
const p2 = new Product("Shorts", 60.00, 2)
const p3 = new DigitalProduct("JS Course", 200.00, 1, "online")

const cart = new Cart()

cart.add(p1)
cart.add(p2)
cart.add(p3)

console.log("Items in cart");
cart.listItems()

console.log(`The total of the cart: ${cart.getTotal().toFixed(2)}`);

