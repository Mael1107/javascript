let value = document.getElementById("value")
let buttonLess = document.getElementById("decrement")
let buttonAdd = document.getElementById("increment")

let state = {count: 0}

const setState = (newState) => {

    state = { ...state, ...newState }
    console.log(state)

    render()
}

const render = () => {
    value.innerHTML = state.count
}

buttonLess.addEventListener("click", () =>{
    setState({count: state.count - 1})
})

buttonAdd.addEventListener("click", () =>{
    setState({count: state.count + 1})
})

render()