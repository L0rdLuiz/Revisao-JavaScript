async function carregarDados() {
    try {
        let resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!resp.ok) throw new Error("Erro na requisição");

        let dados = await resp.json();
        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Erro:", erro.message);
    }

}

carregarDados();