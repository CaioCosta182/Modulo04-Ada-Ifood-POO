// Crie uma classe chamada "Escola" com os atributos nome, endereço e lista de alunos matriculados.
// Implemente um construtor para esta classe. Crie métodos para matricular alunos na escola e
// exibir a lista de alunos matriculados.
// Crie objetos de escolas e teste os métodos.
class Escola {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.alunosMatriculados = [];
  }

  matricularAluno(aluno) {
    this.alunosMatriculados.push(aluno);
    console.log(`Aluno ${aluno.nome} matriculado na escola ${this.nome}.`);
  }

  exibirAlunosMatriculados() {
    console.log(`Alunos matriculados na escola ${this.nome}:`);
    if (this.alunosMatriculados.length === 0) {
      console.log("Nenhum aluno matriculado.");
    } else {
      this.alunosMatriculados.forEach((aluno, index) => {
        console.log(
          `${index + 1}. ${aluno.nome} - Matrícula: ${aluno.matricula}`
        );
      });
    }
  }
}

const escola1 = new Escola("Escola Primária", "Rua das Flores, 123");
const escola2 = new Escola("Escola Secundária", "Avenida Principal, 456");

const aluno1 = { nome: "João", matricula: "ABC123" };
const aluno2 = { nome: "Maria", matricula: "XYZ789" };
const aluno3 = { nome: "Pedro", matricula: "123DEF" };

escola1.matricularAluno(aluno1);
escola1.matricularAluno(aluno2);
escola2.matricularAluno(aluno3);

console.log("Escola 1:");
escola1.exibirAlunosMatriculados();
console.log();

console.log("Escola 2:");
escola2.exibirAlunosMatriculados();
