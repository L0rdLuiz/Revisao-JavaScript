let contador = 0;
console.log("Início da Contagem");

let intervalo = setInterval(function() {
    console.log(contador);
    contador++;
    if (contador === 11) {
        console.log("Fim da Contagem");
        clearInterval(intervalo);
    }
}, 1000);