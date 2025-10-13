class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get area() {
        return this.width * this.height
    }

    get perimeter() {
        return (2 * this.width) + (2 * this.height)
    }

    set resize ({width, height}) {
        this.width = width
        this.height = height
    }
}

const d1 = new Rectangle(7, 5)

console.log(d1.area);
console.log(d1.perimeter);


d1.resize = {width: 9, height: 5}
console.log(d1.area);
console.log(d1.perimeter);
