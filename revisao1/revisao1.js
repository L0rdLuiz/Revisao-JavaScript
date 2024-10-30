//Declaração de variáveis
let nome = "Luiz";
const idade = 21;
var cidade = "Balneário Camboriú";

//Tipos de Dados
let texto = 'Meu nome é Luiz eu gosto de jogar';
let numero = 30;
let booleano = true;
let nulo = null;
let indefinido = undefined;
let objeto = {nome: 'Luiz', idade: 21, cidade: 'Balneário Camboriú'};
let array = [1, 2, 3, 4, 5];

//Operações
let soma = 1+1;
let subtracao = 10 - 5;
let multiplicacao = 10 * 10;
let divisao = 10 / 2;
let resto = 10 % 3;
let incremento = 10;
incremento++;
let decremento = 10;
decremento--;

if (soma > 10) {
    console.log('Soma é maior que 10');
} else {
    console.log('Soma é menor que 10');
}

let temperatura = 15;

if (temperatura < 20) {
    console.log('está frio');
} else if (temperatura < 30) {
    console.log('está normal');
} else {
    console.log('está quente')
}

function areaDoRetangulo(largura, altura) {
    return largura * altura;
}

let altura = 3;
let largura = 5;

console.log(areaDoRetangulo(largura, altura));

//Loop for
for (let i = 0; i<5; i++) {
    console.log("o valor de i é: ", i);
}

// Loop while
let contador = 0;
while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}

// Loop do...while
let numeroloop = 0;
do {
    console.log("Número:", numeroloop);
    numeroloop++;
} while (numeroloop < 2);

//Loop for atividade
for (let cont = 0; cont<=10; cont++) {
    console.log(cont);
}

let contNegativo = 10;
while (contNegativo != 0) {
    console.log(contNegativo);
    contNegativo--;
}

//Declarando Array
let frutas = ["maçã", "abacaxi", "tomate"];
console.log(frutas[0])

//Adiciona uva
frutas.push("uva");

//remove uva
frutas.pop();

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

let numeros = [1, 10, 29, 18];

for (let numero of numeros) {
    console.log("Número:", numero);
}

let livro = {
    titulo: "Diário de um Heroi",
    autor: "Pablo Marçal",
    anoPublicacao: 2024,
    exibirInfo: function() {
        console.log(this.titulo);
        console.log(this.autor);
        console.log(this.anoPublicacao);
    }
};

livro.exibirInfo();

let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let potencializados = numerosArray.map(numero => numero * numero);

console.log(potencializados);

let numerosFilter = [1,2,3,4,5,6,7,8,9,10];
let pares = numerosFilter.filter(numero => numero % 2 === 0);

console.log(pares);

let numerosReduce = [1,2,3,4,5,6,7,8,9,10];
let produtoFinal = numerosReduce.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(produtoFinal);

function carregarDados() {
    return new Promise((resolve,reject) => {
        let sucesso = false;

        setTimeout(() => {
            if(sucesso) {
                resolve({id: 1, nome: "Luiz Antonio"});
            } else {
                reject("Erro ao carregar dados");
            }
        }, 2000);
    });
}

async function exibirDados() {
    try {
        let dados = await carregarDados();
        console.log(dados);
    } catch (erro) {
        console.error(erro);
    }
}

exibirDados();

