// Defina uma classe chamada "ProdutoEletrônico" com os atributos nome, preço e garantia em meses.
// Implemente um construtor para esta classe.
// Crie um método para verificar se o produto está na garantia com base na quantidade de meses desde a compra.
// Crie objetos de produtos eletrônicos e teste o método.

class ProdutoEletronico {
  constructor(nome, preco, garantiaMeses) {
    this.nome = nome;
    this.preco = preco;
    this.garantiaMeses = garantiaMeses;
    this.dataCompra = new Date();
  }

  estaNaGarantia() {
    const dataAtual = new Date();

    const mesesDesdeCompra =
      (dataAtual.getFullYear() - this.dataCompra.getFullYear()) * 12 +
      (dataAtual.getMonth() - this.dataCompra.getMonth());

    return mesesDesdeCompra <= this.garantiaMeses;
  }
}

const produto1 = new ProdutoEletronico("Smartphone", 1200, 12);
const produto2 = new ProdutoEletronico("Laptop", 2500, 24);

console.log("Produto 1:");
console.log(`Nome: ${produto1.nome}`);
console.log(`Preço: $${produto1.preco}`);
console.log(`Garantia (meses): ${produto1.garantiaMeses}`);
console.log(`Está na garantia? ${produto1.estaNaGarantia() ? "Sim" : "Não"}`);
console.log();

console.log("Produto 2:");
console.log(`Nome: ${produto2.nome}`);
console.log(`Preço: $${produto2.preco}`);
console.log(`Garantia (meses): ${produto2.garantiaMeses}`);
console.log(`Está na garantia? ${produto2.estaNaGarantia() ? "Sim" : "Não"}`);
