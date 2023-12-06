// Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de disciplinas.
// Implemente um construtor para inicializar esses atributos e métodos
// para adicionar disciplinas ao aluno e calcular a média geral.
// Crie objetos de alunos e teste os métodos.

class Aluno {
  constructor(nome, matricula, listaDiciplinas) {
    this.nome = nome;
    this.matricula = matricula;
    this.disciplinas = [];
  }

  adicionarDisciplina(disciplina, nota) {
    this.disciplinas.push({ disciplina, nota });
    console.log(`Disciplina ${disciplina} adicionada com nota ${nota}`);
  }

  calcularMediaGeral() {
    if (this.disciplinas.length === 0) {
      console.log("O aluno não está matriculado em nenhuma disciplina.");
      return null;
    }

    const somaNotas = this.disciplinas.reduce(
      (soma, { nota }) => soma + nota,
      0
    );
    return somaNotas / this.disciplinas.length;
  }
}

const aluno1 = new Aluno("João", "12345");
const aluno2 = new Aluno("Maria", "67890");

console.log("Aluno 1:");
console.log(`Nome: ${aluno1.nome}`);
console.log(`Matrícula: ${aluno1.matricula}\n`);

console.log("Aluno 2:");
console.log(`Nome: ${aluno2.nome}`);
console.log(`Matrícula: ${aluno2.matricula}\n`);

aluno1.adicionarDisciplina("Matemática", 8);
aluno1.adicionarDisciplina("História", 7);

aluno2.adicionarDisciplina("Inglês", 9);
aluno2.adicionarDisciplina("Ciências", 6);

console.log("Aluno 1 - Média Geral:");
console.log(`Média: ${aluno1.calcularMediaGeral()}\n`);

console.log("Aluno 2 - Média Geral:");
console.log(`Média: ${aluno2.calcularMediaGeral()}`);
