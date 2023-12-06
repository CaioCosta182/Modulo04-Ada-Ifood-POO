// Crie uma classe chamada "Triângulo" com os atributos lado1, lado2 e lado3.
// Adicione um construtor para inicializar esses atributos.
// Implemente um método para verificar se os lados formam um triângulo válido
// (a soma de dois lados deve ser maior que o terceiro) e outro método para calcular a área do triângulo.
// Teste com diferentes conjuntos de lados.
class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  verificarTrianguloValido() {
    return (
      this.lado1 + this.lado2 > this.lado3 &&
      this.lado1 + this.lado3 > this.lado2 &&
      this.lado2 + this.lado3 > this.lado1
    );
  }

  calcularArea() {
    if (!this.verificarTrianguloValido()) {
      console.log("Os lados fornecidos não formam um triângulo válido.");
      return null;
    }

    const s = (this.lado1 + this.lado2 + this.lado3) / 2;
    const area = Math.sqrt(
      s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3)
    );
    return area;
  }
}

const triangulo1 = new Triangulo(3, 4, 5);
const triangulo2 = new Triangulo(2, 2, 5);

console.log("Triângulo 1:");
console.log(`Lado 1: ${triangulo1.lado1}`);
console.log(`Lado 2: ${triangulo1.lado2}`);
console.log(`Lado 3: ${triangulo1.lado3}`);
console.log(`É um triângulo válido? ${triangulo1.verificarTrianguloValido()}`);
console.log(`Área: ${triangulo1.calcularArea()}\n`);

console.log("Triângulo 2:");
console.log(`Lado 1: ${triangulo2.lado1}`);
console.log(`Lado 2: ${triangulo2.lado2}`);
console.log(`Lado 3: ${triangulo2.lado3}`);
console.log(`É um triângulo válido? ${triangulo2.verificarTrianguloValido()}`);
console.log(`Área: ${triangulo2.calcularArea()}`);
