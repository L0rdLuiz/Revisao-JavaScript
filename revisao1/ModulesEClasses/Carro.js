export class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    informacoes() {
        console.log("Marca: ", this.marca, "Modelo: ", this.modelo, "Ano: ", this.ano);
    }
}