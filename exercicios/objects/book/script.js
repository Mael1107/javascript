const book = {
    title: "Secret Dinner",
    author: "Raphael Montes",
    year: 2016,
    getInfo: function() {
        return `My book is ${this.title} (${this.year}) by ${this.author}.`
    }
}
// Atualizando/adcionando propriedades ao objeto
book.pages = 283
book.year = 2011
book.genres = ["Suspense", "Fiction", "Terror"]

// Estrutura do objeto
console.log(book)
// Imprimindo no console com os dados atualizados
console.log(book.getInfo());

