const company = {
    name: "Apple",
    location: {
        city: "Cupertino",
        country: "US"
    },
    employees: [
        {name: "Ismael", role: "Frontend Developer", skills: ["HTML", "CSS+", "JavaScript"]},
        {name: "David", role: "Frontend Developer", skills: ["HTML", "CSS", "JavaScript Plus"]},
    ]
}

const companyJSON = JSON.stringify(company)
console.log(companyJSON)

const objcompany = JSON.parse(companyJSON)
console.log(objcompany.location.country)
console.log(objcompany.employees[0].name)
console.log(objcompany.employees[1].skills[0])