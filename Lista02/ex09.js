// Crie uma classe chamada "Produto" com os atributos nome, preço e quantidade em estoque.
// Implemente um construtor para inicializar esses atributos e métodos para calcular o valor total em estoque e para
// adicionar ou remover unidades do estoque. Crie objetos de produtos e teste os métodos.
class Produto {
  constructor(nome, preco, quantidadeEmEstoque) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEmEstoque = quantidadeEmEstoque;
  }

  calcularValorTotalEmEstoque() {
    return this.preco * this.quantidadeEmEstoque;
  }

  adicionarAoEstoque(quantidade) {
    if (quantidade > 0) {
      this.quantidadeEmEstoque += quantidade;
      console.log(
        `${quantidade} unidades adicionadas ao estoque. Novo total: ${this.quantidadeEmEstoque}`
      );
    } else {
      console.log("A quantidade adicionada deve ser maior que zero.");
    }
  }

  removerDoEstoque(quantidade) {
    if (quantidade > 0 && quantidade <= this.quantidadeEmEstoque) {
      this.quantidadeEmEstoque -= quantidade;
      console.log(
        `${quantidade} unidades removidas do estoque. Novo total: ${this.quantidadeEmEstoque}`
      );
    } else {
      console.log("Quantidade inválida para remoção ou estoque insuficiente.");
    }
  }
}

const produto1 = new Produto("Camiseta", 25.0, 50);
const produto2 = new Produto("Caneta", 2.5, 100);

console.log("Produto 1:");
console.log(`Nome: ${produto1.nome}`);
console.log(`Preço: R$ ${produto1.preco.toFixed(2)}`);
console.log(`Quantidade em Estoque: ${produto1.quantidadeEmEstoque}`);
console.log(
  `Valor Total em Estoque: R$ ${produto1
    .calcularValorTotalEmEstoque()
    .toFixed(2)}\n`
);

console.log("Produto 2:");
console.log(`Nome: ${produto2.nome}`);
console.log(`Preço: R$ ${produto2.preco.toFixed(2)}`);
console.log(`Quantidade em Estoque: ${produto2.quantidadeEmEstoque}`);
console.log(
  `Valor Total em Estoque: R$ ${produto2
    .calcularValorTotalEmEstoque()
    .toFixed(2)}\n`
);

produto1.adicionarAoEstoque(20);
produto2.removerDoEstoque(50);

console.log("Produto 1 após operações:");
console.log(`Quantidade em Estoque: ${produto1.quantidadeEmEstoque}`);
console.log(
  `Valor Total em Estoque: R$ ${produto1
    .calcularValorTotalEmEstoque()
    .toFixed(2)}\n`
);

console.log("Produto 2 após operações:");
console.log(`Quantidade em Estoque: ${produto2.quantidadeEmEstoque}`);
console.log(
  `Valor Total em Estoque: R$ ${produto2
    .calcularValorTotalEmEstoque()
    .toFixed(2)}`
);
