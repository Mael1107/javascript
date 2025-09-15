class Student {
    constructor(name, grades) {
        this.name = name
        this.grades = grades
    }

    get average() {
        let average = this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length
        return average.toFixed(1)
    }


    set addGrade(value) {
        if (value < 0 || value > 10) {
            console.log("Invalid Grade!")
        } else {
            this.grades.push(value)
        }
    }
}

const student1 = new Student("Ismael", [10, 9, 7, 5])
student1.addGrade = 10

console.log(student1.average)