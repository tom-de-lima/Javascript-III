let number = 1
function escalar() {

    const listaEscalacao = document.getElementById('lista');

    const posicao = document.getElementById("posicao")
    const nome = document.getElementById("nome")
    const nCamisa = document.getElementById("ncamisa")

    const h3 = document.createElement("h3")
    h3.innerText = "Jogador: " + number

    const newUl = document.createElement('ul');

    const linhaHorizontal = document.createElement("hr")

    const posicaoLi = document.createElement("li")
    posicaoLi.className = "item-list"
    posicaoLi.innerText = "Posição: " + posicao.value
    newUl.appendChild(posicaoLi)
    newUl.appendChild(document.createElement("br"))

    const nomeLi = document.createElement("li")
    nomeLi.className = "item-list"
    nomeLi.innerText = "Nome: " + nome.value
    newUl.appendChild(nomeLi)
    newUl.appendChild(document.createElement("br"))
    
    const camisaLi = document.createElement("li")
    camisaLi.className = "item-list"
    camisaLi.innerText = "Número da Camisa: " + nCamisa.value
    newUl.appendChild(camisaLi)
    newUl.appendChild(document.createElement("br"))

    listaEscalacao.append(h3, newUl, linhaHorizontal) 

    posicao.value = ""
    nome.value = ""
    nCamisa.value = ""
    
    number++
}

