// Crie uma classe chamada "Estudante" com os atributos nome, matrícula e lista de disciplinas.
// Implemente um construtor para inicializar esses atributos e métodos para adicionar e remover disciplinas do estudante.
// Crie objetos de estudantes e teste os métodos.
class Estudante {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.disciplinas = [];
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
  }

  removerDisciplina(disciplina) {
    const index = this.disciplinas.indexOf(disciplina);
    if (index !== -1) {
      this.disciplinas.splice(index, 1);
    }
  }
}

const estudante1 = new Estudante("João", "2021001");
const estudante2 = new Estudante("Maria", "2021002");

console.log("Estudante 1:");
console.log(`Nome: ${estudante1.nome}`);
console.log(`Matrícula: ${estudante1.matricula}`);
console.log(`Disciplinas: ${estudante1.disciplinas.join(", ")}`);
estudante1.adicionarDisciplina("Matemática");
estudante1.adicionarDisciplina("História");
console.log(`Disciplinas após adição: ${estudante1.disciplinas.join(", ")}`);
estudante1.removerDisciplina("História");
console.log(`Disciplinas após remoção: ${estudante1.disciplinas.join(", ")}\n`);

console.log("Estudante 2:");
console.log(`Nome: ${estudante2.nome}`);
console.log(`Matrícula: ${estudante2.matricula}`);
console.log(`Disciplinas: ${estudante2.disciplinas.join(", ")}`);
estudante2.adicionarDisciplina("Inglês");
console.log(`Disciplinas após adição: ${estudante2.disciplinas.join(", ")}`);
