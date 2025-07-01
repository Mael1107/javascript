function adicionarTarefa() {


    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    let mensagem = document.getElementById("mensagem")

    if (tarefa == "" ) {
        
        let mensagemError = "Digite uma tarefa para prosseguir!"
        mensagem.textContent = mensagemError
        mensagem.style.color = "red"
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green"
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    
    inputTarefa.value = ""


}
