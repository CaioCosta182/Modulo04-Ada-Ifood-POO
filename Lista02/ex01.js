// Crie uma classe chamada "Carro" com os atributos marca, modelo e ano.
// Em seguida, crie um construtor para a classe que inicializa esses atributos.
// Crie objetos de carros diferentes e imprima suas informações.

// let marca;
// let modelo;
// let ano;

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const carro1 = new Carro("Uno", "Fiat", 1995);
const carro2 = new Carro("Honda", "Civic", 2021);

console.log("Carro 1:");
console.log(`Marca: ${carro1.marca}`);
console.log(`Modelo: ${carro1.modelo}`);
console.log(`Ano: ${carro1.ano}`);

console.log("\nCarro 2:");
console.log(`Marca: ${carro2.marca}`);
console.log(`Modelo: ${carro2.modelo}`);
console.log(`Ano: ${carro2.ano}`);
