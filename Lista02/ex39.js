// Crie uma classe chamada "RelatórioFinanceiro" com os atributos mês, ano e lista de despesas.
// Implemente um construtor para esta classe. Crie métodos para adicionar despesas
//  ao relatório e calcular o total de despesas para um determinado mês e ano.
// Crie objetos de relatórios financeiros e teste os métodos.
class Despesa {
  constructor(descricao, valor) {
    this.descricao = descricao;
    this.valor = valor;
  }
}

class RelatorioFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.despesas = [];
  }

  adicionarDespesa(descricao, valor) {
    const despesa = new Despesa(descricao, valor);
    this.despesas.push(despesa);
    console.log(
      `Despesa adicionada para ${this.mes}/${
        this.ano
      }: ${descricao} - R$${valor.toFixed(2)}`
    );
  }

  calcularTotalDespesas() {
    const totalDespesas = this.despesas.reduce(
      (total, despesa) => total + despesa.valor,
      0
    );
    console.log(
      `Total de despesas para ${this.mes}/${
        this.ano
      }: R$${totalDespesas.toFixed(2)}`
    );
    return totalDespesas;
  }
}

const relatorio1 = new RelatorioFinanceiro(1, 2023);
const relatorio2 = new RelatorioFinanceiro(2, 2023);

relatorio1.adicionarDespesa("Aluguel", 1200);
relatorio1.adicionarDespesa("Supermercado", 250);
relatorio2.adicionarDespesa("Transporte", 100);
relatorio2.adicionarDespesa("Restaurante", 80);

console.log();
relatorio1.calcularTotalDespesas();
console.log();
relatorio2.calcularTotalDespesas();
