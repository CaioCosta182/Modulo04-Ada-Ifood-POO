// Defina uma classe chamada "Círculo" que tenha um atributo raio e métodos para calcular a área e o perímetro do círculo.
// Crie objetos de círculos com diferentes raios e exiba suas áreas e perímetros.

class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

const circulo1 = new Circulo(5);
const circulo2 = new Circulo(8);

console.log("Círculo 1:");
console.log(`Raio: ${circulo1.raio}`);
console.log(`Área: ${circulo1.calcularArea().toFixed(2)}`);
console.log(`Perímetro: ${circulo1.calcularPerimetro().toFixed(2)}\n`);

console.log("Círculo 2:");
console.log(`Raio: ${circulo2.raio}`);
console.log(`Área: ${circulo2.calcularArea().toFixed(2)}`);
console.log(`Perímetro: ${circulo2.calcularPerimetro().toFixed(2)}`);
