// Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de notas.
// Implemente um construtor para inicializar os atributos e um método para calcular a média das notas do aluno.
// Crie objetos de alunos e calcule suas médias.
class Aluno {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas || [];
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }

    const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
    return somaNotas / this.notas.length;
  }
}

const aluno1 = new Aluno("João", "12345", [8, 7, 9]);
const aluno2 = new Aluno("Maria", "67890", [9, 9, 9]);

console.log("Aluno 1:");
console.log(`Nome: ${aluno1.nome}`);
console.log(`Matrícula: ${aluno1.matricula}`);
console.log(`Notas: ${aluno1.notas.join(", ")}`);
console.log(`Média: ${aluno1.calcularMedia().toFixed(2)}\n`);

console.log("Aluno 2:");
console.log(`Nome: ${aluno2.nome}`);
console.log(`Matrícula: ${aluno2.matricula}`);
console.log(`Notas: ${aluno2.notas.join(", ")}`);
console.log(`Média: ${aluno2.calcularMedia().toFixed(2)}`);
