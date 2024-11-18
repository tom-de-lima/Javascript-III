function send(element) { 
    const user = element.children.user.value;
    // A variável "user" armazena o valor do campo com o nome "user" contido no elemento pai "element".

    const password = element.children.password.value;
    // A variável "password" armazena o valor do campo com o nome "password" contido no elemento pai "element".

    const confirmPws = element.children.confirmPws.value;
    // A variável "confirmPws" armazena o valor do campo com o nome "confirmPws" contido no elemento pai "element".

    if (password === confirmPws) {
        alert("Usuário cadastrado com sucesso");
        // Se o valor de "password" for igual ao de "confirmPws", exibe um alerta de sucesso.
    } else {
        alert("Senhas não conferem");
        // Caso contrário, exibe um alerta informando que as senhas não conferem.
    }

    console.log(user, password, confirmPws);
    // Exibe no console os valores de "user", "password" e "confirmPws" para verificação e depuração.
}


