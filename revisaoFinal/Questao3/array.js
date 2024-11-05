const numeros = [5, 8, 10, 13, 20, 30];

let dobrar = numeros.map(numeros => numeros*2);

console.log(dobrar);

let maioresQue15 = numeros.filter(numeros => numeros > 15);

console.log(maioresQue15);

let somarTodos = numeros.reduce((acumulador,numero) => acumulador + numero, 0);

console.log(somarTodos);