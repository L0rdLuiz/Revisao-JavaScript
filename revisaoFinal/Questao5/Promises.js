async function carregarDadosUsuario() {
    try {
        let resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        return new Promise((resolve, reject) => {
            if (resposta.ok) {
                resposta.json().then(dados => resolve(dados));
            } else {
                reject("Erro na requisição");
            }
        });
        
    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

carregarDadosUsuario()
    .then(dados => console.log("Dados do usuário:", dados))
    .catch(erro => console.error(erro));