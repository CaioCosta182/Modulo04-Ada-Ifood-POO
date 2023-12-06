// Crie uma classe chamada "Retângulo" com os atributos largura e altura.
// Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a área do retângulo.
// Crie objetos de retângulos com diferentes dimensões e exiba suas áreas.

class Retangulo {
  constructor(largura, altura) {
    this.altura = altura;
    this.largura = largura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

// Criando objetos de retângulos com diferentes dimensões
const retangulo1 = new Retangulo(5, 8);
const retangulo2 = new Retangulo(10, 3);

// Exibindo áreas dos retângulos sem string template
console.log("Retângulo 1:");
console.log("Largura: " + retangulo1.largura);
console.log("Altura: " + retangulo1.altura);
console.log("Área: " + retangulo1.calcularArea() + "\n");

console.log("Retângulo 2:");
console.log("Largura: " + retangulo2.largura);
console.log("Altura: " + retangulo2.altura);
console.log("Área: " + retangulo2.calcularArea());
