setTimeout(() => {
    console.log("Boas-vindas!");
}, 2000);

let contador = 0;
let intervalo = setInterval(() => {
    console.log("Contador:" + contador);
    contador++;
    if (contador == 10) clearInterval(intervalo);
}, 1000);