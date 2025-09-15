class Temperature {
    constructor(celsius) {
        this.celsius = celsius
    }

    get fahrenheit() {
        return (this.celsius * 1.8) + 32
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8
    }

    info() {
        return `Temperature in Celsius: ${this.celsius}Cº and in Fahrenheit: ${this.fahrenheit}F`
    }
}


const t1 = new Temperature(30)
console.log(t1.fahrenheit);

t1.fahrenheit = 86
console.log(t1.fahrenheit);
console.log(t1.info());

