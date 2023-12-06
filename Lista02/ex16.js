// Defina uma classe chamada "Funcionário" com os atributos nome, cargo e salário.
// Adicione um construtor para inicializar esses atributos.
// Implemente um método para calcular o salário anual do funcionário (salário mensal multiplicado por 12).
// Crie objetos de funcionários e calcule seus salários anuais.

class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
  salarioAnual() {
    let salarioAnual = this.salario * 12;
    return salarioAnual;
  }
}
funcionario1 = new Funcionario("José", "Operador de Fotocopiadora", 1500);
funcionario2 = new Funcionario("Jão", "Gerente", 2500);

console.log(
  `${funcionario1.nome} é ${funcionario1.cargo} e ganha R$:${
    funcionario1.salario
  } por mês, sua renda anual é: R$:${funcionario1.salarioAnual()} `
);
console.log("");
console.log(
  `${funcionario2.nome} é ${funcionario2.cargo} e ganha R$:${
    funcionario2.salario
  } por mês, sua renda anual é: R$:${funcionario2.salarioAnual()} `
);
