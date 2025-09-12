async function getUsers() {
  try {
    // 1. Buscar dados
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // 2. Pegar referência do <ul>
    const userList = document.getElementById("user-list");

    // 3. Limpar lista (caso já tenha conteúdo)
    userList.innerHTML = "";

    // 4. Criar <li> para cada usuário e adicionar ao <ul>
    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });

  } catch (error) {
    console.log("Erro ao buscar usuários:", error);
  }
}

// Executa a função quando a página carregar
getUsers();