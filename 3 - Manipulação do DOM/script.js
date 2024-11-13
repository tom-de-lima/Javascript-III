// Função para adicionar um novo contato à lista de contatos
function addContact() {
  // Obtém a div onde os novos contatos serão adicionados
  const divContact = document.getElementById("contact-list")

  // Cria um elemento <h3> para identificar o novo contato
  const h3 = document.createElement("h3")
  h3.innerText = "Novo Contato" // Define o texto do cabeçalho como "Novo Contato"

  // Cria uma lista não ordenada para armazenar os dados do novo contato
  const newUl = document.createElement("ul")

  // Cria o campo de entrada para o nome do contato
  const nameLi = document.createElement("li") // Elemento <li> para o nome
  nameLi.innerText = "Nome" // Texto que aparece ao lado do campo de entrada
  const nameInput = document.createElement("input") // Campo de entrada de texto para o nome
  nameInput.type = "text"
  nameInput.name = "fullname" // Atribui o nome "fullname" ao campo
  nameLi.appendChild(nameInput) // Adiciona o campo de entrada ao <li> correspondente
  newUl.appendChild(nameLi) // Adiciona o <li> à lista não ordenada
  newUl.appendChild(document.createElement("br")) // Adiciona uma quebra de linha para separação visual

  // Cria o campo de entrada para o telefone do contato
  const phoneLi = document.createElement("li") // Elemento <li> para o telefone
  phoneLi.innerText = "Telefone" // Texto que aparece ao lado do campo de entrada
  const phoneInput = document.createElement("input") // Campo de entrada de texto para o telefone
  phoneInput.type = "text" // Define o tipo do campo como texto
  phoneInput.name = "phoneNumber" // Atribui o nome "phoneNumber" ao campo
  phoneLi.appendChild(phoneInput) // Adiciona o campo de entrada ao <li> correspondente
  newUl.appendChild(phoneLi) // Adiciona o <li> à lista não ordenada
  newUl.appendChild(document.createElement("br")) // Adiciona uma quebra de linha para separação visual

  // Cria o campo de entrada para o endereço do contato
  const addressLi = document.createElement("li") // Elemento <li> para o endereço
  addressLi.innerHTML = '<label for="address">Endereço: </label>' // Rótulo associado ao campo de entrada
  const addressInput = document.createElement("input") // Campo de entrada de texto para o endereço
  addressInput.type = "text"
  addressInput.id = "address" // Atribui o id "address" (correção necessária para funcionar adequadamente)
  addressLi.appendChild(addressInput) // Adiciona o campo de entrada ao <li> correspondente
  newUl.appendChild(addressLi) // Adiciona o <li> à lista não ordenada
  newUl.appendChild(document.createElement("br")) // Adiciona uma quebra de linha para separação visual

  // Cria uma linha horizontal para separar este contato de outros
  const linhaHorizontal = document.createElement("hr")

  // Adiciona os elementos criados (cabeçalho, lista de informações e linha horizontal) à div de contatos
  divContact.append(h3, newUl, linhaHorizontal)
}

// Função para remover o contato mais recente da lista de contatos
function removeContact() {
  // Obtém a div onde os contatos estão armazenados
  const divContact = document.getElementById("contact-list")

  // Obtém todos os elementos <h3>, <ul> e <hr> (linhas horizontais) da div de contatos
  const titles = document.getElementsByTagName("h3")
  const contacts = document.getElementsByTagName("ul")
  const lines = document.getElementsByTagName("hr")

  // Remove o último título, lista e linha horizontal (correspondentes ao contato mais recente)
  divContact.removeChild(titles[titles.length - 1])
  divContact.removeChild(contacts[contacts.length - 1])
  divContact.removeChild(lines[lines.length - 1])
}
