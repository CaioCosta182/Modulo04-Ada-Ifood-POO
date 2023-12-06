// Desenvolva uma classe chamada "Funcionário" com os atributos nome, cargo e salário.
//  Adicione um construtor para inicializar esses atributos.
//  Implemente um método para aumentar o salário de um funcionário em uma determinada porcentagem.
// Crie objetos de funcionários e teste o método de aumento de salário.

class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
  aumento() {
    this.salario += this.salario * 0.1;
  }
}
funcionario01 = new Funcionario("João", "Dev", 1000);
funcionario02 = new Funcionario("Maria", "Gerente", 10000);

console.log(funcionario01);
funcionario01.aumento();
console.log(funcionario01);
console.log("");
console.log(funcionario02);
funcionario02.aumento();
console.log(funcionario02);
