// Crie uma classe chamada "Livro" com os atributos título, autor e ano de publicação.
// Implemente um construtor para esta classe.
// Crie objetos de livros e exiba suas informações.

class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
}
const livro1 = new Livro("Ponto de Impacto", "Dan Brow", 2000);
const livro2 = new Livro("Anjos e Demonios", "Dan Brow", 2005);

console.log("Livro 1:");
console.log(`Nome: ${livro1.titulo}`);
console.log(`Autor: ${livro1.autor}`);
console.log(`Ano de Publicação: ${livro1.anoPublicacao}`);
console.log("");
console.log("Livro 2:");
console.log(`Nome: ${livro2.titulo}`);
console.log(`Autor: ${livro2.autor}`);
console.log(`Ano de Publicação: ${livro2.anoPublicacao}`);
