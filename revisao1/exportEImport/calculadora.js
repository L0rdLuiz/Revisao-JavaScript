import { somar, subtrair, multiplicar, dividir } from "./operacoes.js";

function calcular(num1, num2, operacao) {
    switch(operacao) {
        case 'somar':
            console.log("Somar: ", somar(num1, num2));
            break;
        case 'subtrair':
            console.log("Subtrair: ", subtrair(num1, num2));
            break;
        case 'multiplicar':
            console.log("Multiplicar: ", multiplicar(num1, num2));
            break;
        case 'dividir':
            console.log("Dividir: ", dividir(num1, num2));
            break;
    }
}

calcular(10, 5, 'somar');
calcular(8, 3, 'subtrair');
calcular(3, 3, 'multiplicar');
calcular(10, 2, 'dividir');