// Define a variável `number` fora da função para armazenar o número do campo. Fora da função pois garante que cada chamada da função (ocorrência do evento) o número seja mantido incrementado
// Inicializamos `number` com 1 para que o primeiro campo seja numerado como "Campo #1".
let number = 1;

function addNumberedField() {
    // Seleciona o elemento <ul> no DOM onde os novos itens <li> serão adicionados
    const ul = document.getElementById("numbered-list");

    // Cria um novo item de lista <li> para conter o campo de entrada
    const newLi = document.createElement("li");
    newLi.className = "list-item"; // Define uma classe CSS "list-item" para o <li>

    // Cria um novo campo de entrada <input> com o tipo "text"
    const newInput = document.createElement("input");
    newInput.type = "text"; // Define o tipo de entrada como texto

    // Define o valor do campo de entrada, concatenando o texto "Campo #" com o valor atual de `number`
    newInput.value = "Campo #" + number;

    // Anexa o campo de entrada ao <li>
    newLi.appendChild(newInput);

    // Adiciona o item de lista <li> (contendo o input) ao elemento <ul> no DOM
    ul.appendChild(newLi);

    // Incrementa `number` para que o próximo campo tenha um número sequencialmente maior
    number++;
}
