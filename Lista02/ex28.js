// Crie uma classe chamada "CarroEsportivo" com os atributos marca, modelo, ano e velocidade máxima.
// Implemente um construtor para esta classe. Crie métodos para acelerar e frear o carro, e para exibir a velocidade atual.
// Crie objetos de carros esportivos e teste os métodos.

class CarroEsportivo {
  constructor(marca, modelo, ano, velocidadeMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidadeMaxima = velocidadeMaxima;
    this.velocidadeAtual = 0;
  }

  acelerar(aceleracao) {
    this.velocidadeAtual += aceleracao;
    if (this.velocidadeAtual > this.velocidadeMaxima) {
      this.velocidadeAtual = this.velocidadeMaxima;
    }
  }

  frear(deceleracao) {
    this.velocidadeAtual -= deceleracao;
    if (this.velocidadeAtual < 0) {
      this.velocidadeAtual = 0;
    }
  }

  exibirVelocidadeAtual() {
    console.log(
      `Velocidade atual do ${this.marca} ${this.modelo}: ${this.velocidadeAtual} km/h`
    );
  }
}

const carro1 = new CarroEsportivo("Ferrari", "488 GTB", 2022, 300);
const carro2 = new CarroEsportivo("Porsche", "911 Turbo S", 2023, 320);

console.log("Carro 1:");
carro1.acelerar(50);
console.log("Acelerando.");
carro1.exibirVelocidadeAtual();
carro1.frear(20);
console.log("Freio acionado.");
carro1.exibirVelocidadeAtual();
console.log();

console.log("Carro 2:");
carro2.acelerar(80);
console.log("Acelerando.");
carro2.exibirVelocidadeAtual();
carro2.frear(30);
console.log("Freio acionado.");
carro2.exibirVelocidadeAtual();
