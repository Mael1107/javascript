function adicionarTarefa() {


    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    if (tarefa == "" ) {
        window.alert("Insira sua tarefa para prosseguir!")
    } else {
        let mensagem = "Tarefa adicionada com sucesso!"
        document.getElementById("mensagem").textContent = mensagem
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    
    inputTarefa.value = ""


}
