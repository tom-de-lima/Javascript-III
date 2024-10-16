
//Função para obter elementos a partir de um doc HTML..
function show(){
  // Obter um elemento único a partir do seu id
  const elementById = document.getElementById("contact-list")  
  console.log(elementById)

  // Obter vários elementos (HTMLCollection) a partir de um nome de tag
  const elementsByTagName = document.getElementsByTagName("li")
  console.log(elementsByTagName)

  // Obter vários elementos (NodeList) a partir de uma query selector
  const elementsByQuerySelector = document.querySelectorAll("#contact-input")
  console.log(elementsByQuerySelector)

  // Obter vários elementos (NodeList) a partir do atributo name
    const nome = document.getElementsByName("contat1")
    console.log(nome)

  // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
    const nomes = document.querySelectorAll("#contact-list > li > label")
    console.log(nomes)

  // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
    const contato = document.querySelector("#contact-lis > li > label")
    console.log(contato)
}