function addField() {
  // Seleciona o elemento <ul> com o id "inputs" onde os novos itens serão adicionados
  const ul = document.getElementById("inputs")

  // Seleciona o campo de texto <input> com o id "text" para obter o valor digitado pelo usuário
  const text = document.getElementById("text")

  // Cria um novo elemento <li> (item de lista) para adicionar à lista <ul>
  const newLi = document.createElement("li")

  // Define a classe CSS "list-item" para o novo <li> para aplicar estilos personalizados
  newLi.className = "list-item"

  // Define o texto interno do <li> com o valor do campo de entrada de texto
  newLi.innerText = text.value

  // Cria um novo botão que será usado para remover o item <li> da lista
  const newButton = document.createElement("button")

  // Define o texto exibido no botão como "Remover item"
  newButton.innerText = "Remover item"

  // Adiciona um evento de clique ao botão que, ao ser clicado, remove o <li> correspondente
  newButton.onclick = function () {
    ul.removeChild(newLi) // Remove o elemento <li> da lista <ul>
  }

  // Adiciona o botão "Remover item" ao <li> criado, para que apareça ao lado do texto
  newLi.appendChild(newButton)

  // Adiciona o novo <li> (contendo o texto e o botão) à lista <ul>
  ul.appendChild(newLi)

  // Limpa o campo de entrada de texto após adicionar o item à lista
  text.value = ""
}
