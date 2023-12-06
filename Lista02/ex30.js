// Defina uma classe chamada "Casa" com os atributos endereço, número de quartos e valor.
// Implemente um construtor para esta classe. Crie um método para calcular o preço por metro quadrado da casa.
// Crie objetos de casas e teste o método de cálculo de preço.
class Casa {
  constructor(endereco, numeroQuartos, valor) {
    this.endereco = endereco;
    this.numeroQuartos = numeroQuartos;
    this.valor = valor;
  }

  calcularPrecoPorMetroQuadrado(area) {
    return this.valor / area;
  }
}

const casa1 = new Casa("Rua A, 123", 3, 300000);
const casa2 = new Casa("Avenida B, 456", 4, 400000);

const areaCasa1 = 150;
const areaCasa2 = 180;

console.log("Casa 1:");
console.log(`Endereço: ${casa1.endereco}`);
console.log(`Número de quartos: ${casa1.numeroQuartos}`);
console.log(`Valor: $${casa1.valor}`);
console.log(
  `Preço por metro quadrado: $${casa1.calcularPrecoPorMetroQuadrado(
    areaCasa1
  )}\n`
);

console.log("Casa 2:");
console.log(`Endereço: ${casa2.endereco}`);
console.log(`Número de quartos: ${casa2.numeroQuartos}`);
console.log(`Valor: $${casa2.valor}`);
console.log(
  `Preço por metro quadrado: $${casa2.calcularPrecoPorMetroQuadrado(areaCasa2)}`
);
