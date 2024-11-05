class Carro {
    constructor (marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    obterInformacao() {
        console.log("Marca:", this.marca, "Modelo:", this.modelo, "Ano:", this.ano);
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2021);
meuCarro.obterInformacao();