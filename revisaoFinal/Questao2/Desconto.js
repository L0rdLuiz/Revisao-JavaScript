function verificarDesconto(idade, preco) {
    let desconto = 0;
    if (idade < 12 || idade > 60) {
        desconto = preco * 0.10;
        return preco - desconto;
    }
    return preco;
}

let idade1 = 8;
let preco1 = 100;
let idade2 = 65;
let preco2 = 100;

console.log(verificarDesconto(idade1, preco1));
console.log(verificarDesconto(idade2, preco2));