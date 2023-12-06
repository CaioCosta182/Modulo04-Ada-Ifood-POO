// Crie uma classe chamada "Cafeteira" com os atributos marca, capacidade e quantidade de café.
// Implemente um construtor para inicializar esses atributos.
// Crie métodos para encher a cafeteira de café e para fazer uma xícara de café.
// Teste esses métodos em objetos de cafeteira.

class Cafeteira {
  constructor(marca, capacidade, quantidade) {
    this.marca = marca;
    this.capacidade = capacidade;
    this.quantidade = quantidade;
  }
  encherDeCafe(quantidade) {
    if (quantidade > 0 && this.quantidade + quantidade <= this.capacidade) {
      this.quantidade += quantidade;
      console.log(
        `Cafeteira carregada com ${quantidade} unidades de café. Total: ${this.quantidade}`
      );
    } else {
      console.log("Quantidade inválida ou capacidade excedida da cafeteira.");
    }
  }

  fazerXicaraDeCafe() {
    if (this.quantidade >= 1) {
      this.quantidade -= 1;
      console.log("Café feito! Aproveite sua xícara.");
    } else {
      console.log(
        "Não há café suficiente para fazer uma xícara. Por favor, encha a cafeteira."
      );
    }
  }
}

const minhaCafeteira = new Cafeteira("Com Grilo", 6, 4);

console.log("Cafeteira:");
console.log(`Marca: ${minhaCafeteira.marca}`);
console.log(`Capacidade: ${minhaCafeteira.capacidade} xícaras`);
console.log(`Quantidade de Café: ${minhaCafeteira.quantidade} xícaras\n`);

minhaCafeteira.encherDeCafe(3);
minhaCafeteira.fazerXicaraDeCafe();
minhaCafeteira.fazerXicaraDeCafe();
minhaCafeteira.encherDeCafe(1);

console.log("Cafeteira após operações:");
console.log(`Quantidade de Café: ${minhaCafeteira.quantidade} xícaras`);
