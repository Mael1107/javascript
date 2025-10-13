class TextFormatter {
    constructor(text) {
        this.originalText = text
        this.text = text
    }

    get upperCase() {
        return this.text.toUpperCase()
    }

    get lowerCase() {
        return this.text.toLowerCase()
    }

    set addPrefix({prefix, separator}) {
        this.text = `${prefix} ${separator} ${this.originalText}`
    }

    info() {
        return `Original string: ${this.originalText} | Formatted string: ${this.text} `
    }
}

const t1 = new TextFormatter("Araujuh")

console.log(t1.text);

console.log(t1.upperCase);
console.log(t1.lowerCase);
t1.addPrefix = {prefix: "Casal", separator:":"}
console.log(t1.info());



