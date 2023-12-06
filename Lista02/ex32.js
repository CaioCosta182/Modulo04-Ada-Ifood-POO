// Desenvolva uma classe chamada "Loja" com os atributos nome, endereço e lista de produtos.
// Implemente um construtor para esta classe. Crie métodos para adicionar produtos à loja e calcular o preço total dos produtos.
// Crie objetos de lojas e teste os métodos.
class Loja {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  calcularPrecoTotal() {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }
}

const loja1 = new Loja("Supermercado ABC", "Rua Principal, 123");
const loja2 = new Loja("Loja de Eletrônicos XYZ", "Avenida Secundária, 456");

const produto1 = { nome: "Arroz", preco: 5.99 };
const produto2 = { nome: "TV LED", preco: 499.99 };
const produto3 = { nome: "Leite", preco: 2.49 };

loja1.adicionarProduto(produto1);
loja1.adicionarProduto(produto3);
loja2.adicionarProduto(produto2);
loja2.adicionarProduto(produto3);

console.log("Loja 1:");
console.log(`Nome: ${loja1.nome}`);
console.log(`Endereço: ${loja1.endereco}`);
console.log(
  `Preço total dos produtos: $${loja1.calcularPrecoTotal().toFixed(2)}\n`
);

console.log("Loja 2:");
console.log(`Nome: ${loja2.nome}`);
console.log(`Endereço: ${loja2.endereco}`);
console.log(
  `Preço total dos produtos: $${loja2.calcularPrecoTotal().toFixed(2)}`
);
