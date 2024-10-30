document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que o formulário seja enviado

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem");
    let mensagemIdade = document.getElementById("mensagemIdade");

    if (nome === "" || email === "" || idade === "" || telefone === "") {
        mensagem.innerText = "Preencha todos os campos.";
        mensagem.style.color = "red";
    } else {
        mensagem.innerText = "Formulário enviado com sucesso!";
        mensagem.style.color = "green";
    }

    if (idade <= 18) {
        mensagemIdade.innerText = "Idade não permitida.";
        mensagemIdade.style.color = "red";
    } else {
        mensagemIdade.innerText = "Idade Permitida.";
        mensagemIdade.style.color = "green";
    }
});