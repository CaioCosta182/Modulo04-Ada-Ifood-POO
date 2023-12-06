// Crie uma classe chamada "Restaurante" com os atributos nome, tipo de cozinha e lista de pratos do menu.
// Implemente um construtor para esta classe. Crie métodos para adicionar pratos ao menu e exibir o menu completo.
// Crie objetos de restaurantes e teste os métodos.

class Restaurante {
  constructor(nome, tipoCozinha) {
    this.nome = nome;
    this.tipoCozinha = tipoCozinha;
    this.menu = [];
  }

  adicionarPrato(prato) {
    this.menu.push(prato);
  }

  exibirMenu() {
    console.log(`Menu do ${this.nome} (${this.tipoCozinha}):`);
    if (this.menu.length === 0) {
      console.log("O menu está vazio.");
    } else {
      this.menu.forEach((prato, index) => {
        console.log(`${index + 1}. ${prato.nome} - $${prato.preco.toFixed(2)}`);
      });
    }
  }
}

const restaurante1 = new Restaurante("Restaurante Italiano", "Italiana");
const restaurante2 = new Restaurante("Churrascaria Brasileira", "Churrasco");

const prato1 = { nome: "Spaghetti Carbonara", preco: 15.99 };
const prato2 = { nome: "Picanha", preco: 29.99 };
const prato3 = { nome: "Tiramisu", preco: 8.99 };

restaurante1.adicionarPrato(prato1);
restaurante1.adicionarPrato(prato3);
restaurante2.adicionarPrato(prato2);

console.log("Restaurante 1:");
restaurante1.exibirMenu();
console.log();

console.log("Restaurante 2:");
restaurante2.exibirMenu();
