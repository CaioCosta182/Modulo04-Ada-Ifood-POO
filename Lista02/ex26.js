// Crie uma classe chamada "ProdutoAlimentício" com os atributos nome, preço e data de validade.
// Implemente um construtor para esta classe. Crie um método para verificar se o produto está vencido com base na data atual.
//  Crie objetos de produtos alimentícios e teste o método.
class ProdutoAlimenticio {
  constructor(nome, preco, dataValidade) {
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = new Date(dataValidade);
  }

  estaVencido() {
    const dataAtual = new Date();
    return this.dataValidade < dataAtual;
  }
}

const produto1 = new ProdutoAlimenticio("Arroz", 5.99, "2023-12-31");
const produto2 = new ProdutoAlimenticio("Leite", 2.49, "2022-09-15");

console.log("Produto 1:");
console.log(`Nome: ${produto1.nome}`);
console.log(`Preço: $${produto1.preco}`);
console.log(
  `Data de Validade: ${produto1.dataValidade.toISOString().split("T")[0]}`
);
console.log(`Está vencido? ${produto1.estaVencido() ? "Sim" : "Não"}\n`);

console.log("Produto 2:");
console.log(`Nome: ${produto2.nome}`);
console.log(`Preço: $${produto2.preco}`);
console.log(
  `Data de Validade: ${produto2.dataValidade.toISOString().split("T")[0]}`
);
console.log(`Está vencido? ${produto2.estaVencido() ? "Sim" : "Não"}`);
