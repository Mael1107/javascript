function adicionarTarefa() {

    let tarefas = []

    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

    if (tarefa == "" ) {
        
        let mensagemError = "Digite uma tarefa para prosseguir!"
        mensagem.textContent = mensagemError
        mensagem.style.color = "red"
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green"

        tarefas.push(tarefa)

    }

    tarefa.value = ""

}

function Renderizar() {
    let i = 0
    for (i, i < tarefas.length, i++) {
        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }


}
