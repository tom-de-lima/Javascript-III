//Criando a função que vai adcionar elementos no DOM
function addInput(){
  const ul = document.getElementById("inputs") //Encontra o elemento <ul> no documento HTML com o id "inputs" e o armazena na variável ul. Esse é o elemento onde os novos itens (<li>) e os inputs serão adicionados.

  const newLi = document.createElement("li") //Se temos uma <ul>, criamos <li>
  newLi.className = "list-item" //Add uma classe ao novo elemento
  newLi.innerText = "Novo input:" //colocando texto entre a tag <li>

  const newInput = document.createElement("input") //Criando um novo input
  newInput.type = "text" //Definindo o tipo do input
  newInput.name = "input" //Adicionando um name ao novo input

  //Colocando elementos dentro de outros elementos
  newLi.appendChild(newInput) //Insere o elemento <input> (newInput) dentro do item de lista <li> (newLi). Agora, o <li> contém o texto "Novo input:" seguido pelo campo de entrada <input>.
  ul.appendChild(newLi) //Insere o item de lista <li> (newLi), que já contém o texto e o campo <input>, dentro da lista <ul> (ul), adicionando-o à página.
}