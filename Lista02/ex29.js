// Crie uma classe chamada "Pessoa" com os atributos nome, idade e profissão. Implemente um construtor para esta classe.
// Crie um método para saudar outras pessoas com base na profissão da pessoa (por exemplo, "Olá, sou um médico.").
// Crie objetos de pessoas e teste o método de saudação.
class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  saudar() {
    switch (this.profissao.toLowerCase()) {
      case "médico":
        return `Olá, meu nome é ${this.nome},tenho ${this.idade} anos e eu sou um médico (a).`;
      case "engenheiro":
        return `Oi, meu nome é ${this.nome},tenho ${this.idade} anos e eu sou um engenheiro (a).`;
      case "professor":
        return `Oi, meu nome é ${this.nome},tenho ${this.idade} anos e eu sou um professor (a).`;
      default:
        return `Olá, meu nome é ${this.nome},tenho ${this.idade} anos e eu sou ${this.profissao} (a).`;
    }
  }
}

const pessoa1 = new Pessoa("Ana", 30, "Médico");
const pessoa2 = new Pessoa("Carlos", 45, "Engenheiro");
const pessoa3 = new Pessoa("Julia", 28, "Professor");
const pessoa4 = new Pessoa("Lucas", 22, "Artista");

console.log(pessoa1.saudar());
console.log(pessoa2.saudar());
console.log(pessoa3.saudar());
console.log(pessoa4.saudar());
