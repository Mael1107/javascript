const car = {
    brand: "Chevrolet",
    model: "Camaro",
    year: 1966,
    getInfo: function() {
        return `This car is a ${this.brand} ${this.model} from ${this.year}.`
    }
}

car.color = "yellow"
car.owner = "Ismael"
console.log(car)
console.log(car.getInfo());



