let nome = "Luiz";
let idade = 20;

async function carregarDados() {

    try {
        let resposta = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("Nome: " + nome + " Idade: " + idade), 2000);
        });
        
        console.log(resposta);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

carregarDados();