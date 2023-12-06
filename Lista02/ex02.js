// Crie uma classe chamada "Pessoa" com os atributos nome, idade e cidade.
// Implemente um construtor para esta classe.
// Em seguida, crie objetos de pessoas e exiba seus detalhes.
class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}
const Pessoa1 = new Pessoa("Juvenal", 65, "Jeceaba");
const Pessoa2 = new Pessoa("Maria", 68, "Belo Horizonte");

console.log("Pessoa 1:");
console.log(`Nome: ${Pessoa1.nome}`);
console.log(`Idade: ${Pessoa1.idade}`);
console.log(`Cidade: ${Pessoa1.cidade}`);
console.log("");
console.log("Pessoa 2:");
console.log(`Nome: ${Pessoa2.nome}`);
console.log(`Idade: ${Pessoa2.idade}`);
console.log(`Cidade: ${Pessoa2.cidade}`);
