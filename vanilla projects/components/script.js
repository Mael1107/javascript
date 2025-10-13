let showButton = document.getElementById("showButton")
let clearButton = document.getElementById("clearButton")
let content = document.getElementById("add-section")
let addButton = document.getElementById("addButton")
let count = document.getElementById("count")
let totalPrice = document.getElementById("total-price")

let products = []

function updateSummary() {
  count.style.display = "block"
  totalPrice.style.display = "block"
  count.innerHTML = `Amount of the products: ${products.length}`
  const total = products.reduce((acc, prod) => acc + prod.price, 0)
  totalPrice.innerHTML = `Total price of the products: R$${total.toFixed(2)}`
}

showButton.addEventListener("click", () => {
  showButton.style.display = "none"
  content.style.display = "flex"
})

addButton.addEventListener("click", () => {
  content.style.display = "none"
  showButton.style.display = "block"
  let productName = document.getElementById("iname").value.trim()
  let productPrice = Number(document.getElementById("iprice").value)

  if (productPrice <= 0 || productName.length < 2) {
    alert("ERROR")
  } else {
    let sectionProducts = document.getElementById("section-products")
    const productCard = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const removeButton = document.createElement("button")

    removeButton.className = "remove-button"
    removeButton.innerHTML = "Delete"
    h1.innerHTML = productName
    p.innerHTML = `R$ ${productPrice.toFixed(2)}`
    productCard.className = "product-cards"

    productCard.appendChild(h1)
    productCard.appendChild(p)
    productCard.appendChild(removeButton)
    sectionProducts.appendChild(productCard)

    products.push({name: productName, price: productPrice})
    updateSummary()

    removeButton.addEventListener("click", () => {
      sectionProducts.removeChild(productCard)
      products = products.filter(prod => !(prod.name === productName && prod.price === productPrice))
      updateSummary()
    })
  }
})

clearButton.addEventListener("click", () => {
  document.getElementById("iname").value = ""
  document.getElementById("iprice").value = ""
})
