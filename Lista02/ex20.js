class Biblioteca {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.livrosDisponiveis = [];
  }

  adicionarLivro(livro) {
    if (this.livrosDisponiveis) {
      this.livrosDisponiveis.push(livro);
      console.log(`Livro "${livro}" adicionado à biblioteca.`);
    } else {
      console.log(
        "Erro: A lista de livros disponíveis não foi inicializada corretamente."
      );
    }
  }

  emprestarLivro(livro) {
    if (this.livrosDisponiveis && this.livrosDisponiveis.length > 0) {
      const index = this.livrosDisponiveis.indexOf(livro);
      if (index !== -1) {
        this.livrosDisponiveis.splice(index, 1);
        console.log(`Livro "${livro}" emprestado com sucesso.`);
      } else {
        console.log(`O livro "${livro}" não está disponível na biblioteca.`);
      }
    } else {
      console.log(
        "Erro: A lista de livros disponíveis não foi inicializada corretamente ou está vazia."
      );
    }
  }
}

const biblioteca1 = new Biblioteca("Biblioteca Central", "Rua Principal, 123");
const biblioteca2 = new Biblioteca(
  "Biblioteca Municipal",
  "Avenida Principal, 456"
);

console.log("Biblioteca 1:");
console.log(`Nome: ${biblioteca1.nome}`);
console.log(`Endereço: ${biblioteca1.endereco}\n`);

console.log("Biblioteca 2:");
console.log(`Nome: ${biblioteca2.nome}`);
console.log(`Endereço: ${biblioteca2.endereco}\n`);

biblioteca1.adicionarLivro("A Culpa é das Estrelas");
biblioteca1.adicionarLivro("Harry Potter e a Pedra Filosofal");

biblioteca2.adicionarLivro("O Senhor dos Anéis");
biblioteca2.adicionarLivro("1984");

console.log("Livros disponíveis na Biblioteca 1:");
console.log(biblioteca1.livrosDisponiveis);

console.log("Livros disponíveis na Biblioteca 2:");
console.log(biblioteca2.livrosDisponiveis);

biblioteca1.emprestarLivro("A Culpa é das Estrelas");
biblioteca2.emprestarLivro("1984");

console.log("Livros disponíveis após empréstimos:");
console.log("Biblioteca 1:", biblioteca1.livrosDisponiveis);
console.log("Biblioteca 2:", biblioteca2.livrosDisponiveis);
