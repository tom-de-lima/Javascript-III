function addInput() {
  // Seleciona o elemento <ul> com o id "inputs", onde os novos itens de lista serão adicionados
  const ul = document.getElementById("inputs")

  // Seleciona o campo de entrada de texto <input> com o id "text", onde o usuário digita o conteúdo do item
  const text = document.getElementById("text")

  // Cria um novo elemento <li> para ser o novo item da lista
  const newLi = document.createElement("li")

  // Adiciona a classe "list-item" ao novo <li>, permitindo que ele seja estilizado via CSS
  newLi.className = "list-item"

  // Define o texto do novo <li> com o valor atual do campo de entrada (o texto digitado pelo usuário)
  newLi.innerText = text.value

  // Adiciona o novo <li> como um filho do elemento <ul>, exibindo-o na lista
  ul.appendChild(newLi)

  // Limpa o campo de entrada, removendo o texto digitado para que o usuário possa inserir um novo valor
  text.value = ""
}
