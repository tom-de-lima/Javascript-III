let number = 1
// Declara uma variável global "number" com valor inicial 1.
// Essa variável é usada para numerar os jogadores adicionados à lista.

function escalar() {
  const listaEscalacao = document.getElementById("lista")
  // Obtém o elemento HTML com o id "lista", onde os dados dos jogadores serão adicionados.

  const posicao = document.getElementById("posicao")
  const nome = document.getElementById("nome")
  const nCamisa = document.getElementById("ncamisa")
  // Obtém os elementos de entrada de dados para posição, nome e número da camisa.

  const h3 = document.createElement("h3")
  h3.innerText = "Jogador: " + number
  // Cria um elemento `<h3>` dinamicamente para exibir o número do jogador.

  const newUl = document.createElement("ul")
  // Cria um elemento `<ul>` para listar os dados do jogador.

  const linhaHorizontal = document.createElement("hr")
  // Cria um elemento `<hr>` para separar visualmente os jogadores na lista.

  const confirmation = confirm(
    "Confirma os dados: \nPosição: " +
      posicao.value +
      "\nNome: " +
      nome.value +
      "\nNúmero da Camisa: " +
      nCamisa.value
  )
  // Exibe uma caixa de confirmação com os dados inseridos. Retorna `true` se o usuário confirmar.

  if (confirmation) {
    const posicaoLi = document.createElement("li")
    posicaoLi.className = "item-list"
    posicaoLi.innerText = "Posição: " + posicao.value
    newUl.appendChild(posicaoLi)
    newUl.appendChild(document.createElement("br"))
    // Cria um item `<li>` para a posição do jogador, define uma classe para estilização e adiciona ao `<ul>`.

    const nomeLi = document.createElement("li")
    nomeLi.className = "item-list"
    nomeLi.innerText = "Nome: " + nome.value
    newUl.appendChild(nomeLi)
    newUl.appendChild(document.createElement("br"))
    // Cria um item `<li>` para o nome do jogador e adiciona ao `<ul>`.

    const camisaLi = document.createElement("li")
    camisaLi.className = "item-list"
    camisaLi.innerText = "Número da Camisa: " + nCamisa.value
    newUl.appendChild(camisaLi)
    newUl.appendChild(document.createElement("br"))
    // Cria um item `<li>` para o número da camisa do jogador e adiciona ao `<ul>`.

    listaEscalacao.append(h3, newUl, linhaHorizontal)
    // Adiciona o título `<h3>`, a lista `<ul>` e o separador `<hr>` ao elemento "listaEscalacao".

    posicao.value = ""
    nome.value = ""
    nCamisa.value = ""
    // Limpa os campos de entrada após a confirmação.

    number++
    // Incrementa o contador global "number" para o próximo jogador.
  } else {
    alert("Os dados não foram confirmados!")
    return false
    // Exibe um alerta caso o usuário cancele a confirmação e interrompe a execução da função.
  }
}

function remover() {
  const listaRemover = document.getElementById("lista")
  // Obtém o elemento HTML com o id "lista", onde os jogadores estão listados.

  const removeJogador = document.getElementById("remove")
  // Obtém o elemento de entrada onde o usuário insere o número da camisa para remoção.

  const confirma = confirm(
    "Confirma a remoção do jogador de camisa número: " +
      removeJogador.value +
      "?"
  )
  // Exibe uma caixa de confirmação pedindo para confirmar a remoção do jogador.

  if (confirma) {
    const itemUl = listaRemover.querySelectorAll("ul")
    // Obtém todos os elementos `<ul>` dentro do "listaRemover".

    for (ul of itemUl) {
      const itemLi = ul.querySelectorAll("li")
      // Itera sobre os itens `<ul>` e obtém todos os `<li>` dentro de cada lista.

      for (li of itemLi) {
        if (li.innerText.includes(removeJogador.value)) {
          listaRemover.removeChild(ul)
          alert("Jogador removido da escalação com sucesso!")
          // Verifica se o texto do `<li>` contém o número da camisa informado.
          // Se encontrado, remove o `<ul>` correspondente e exibe uma mensagem de sucesso.
        } else {
          alert("Número de camisa inexistente.")
          // Exibe uma mensagem de erro caso o número da camisa não seja encontrado.
        }
      }
    }
  } else {
    alert("A remoção do jogador não foi confirmada.")
    return false
    // Exibe um alerta caso o usuário cancele a confirmação da remoção.
  }

  removeJogador.value = ""
  // Limpa o campo de entrada após a tentativa de remoção.
}
