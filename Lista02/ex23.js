// Desenvolva uma classe chamada "ContaPoupança" com os atributos número da conta, saldo e taxa de juros anual.
// Adicione um construtor para inicializar esses atributos.
// Crie métodos para calcular os juros mensais e depositar juros na conta.
// Teste esses métodos em objetos de conta poupança.

class ContaPoupanca {
  constructor(numeroConta, saldo, taxaJurosAnual) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.taxaJurosAnual = taxaJurosAnual;
  }

  calcularJurosMensais() {
    const taxaJurosMensal = this.taxaJurosAnual / 12 / 100;
    const jurosMensais = this.saldo * taxaJurosMensal;
    return jurosMensais;
  }

  depositarJuros() {
    const jurosMensais = this.calcularJurosMensais();
    this.saldo += jurosMensais;
    console.log(
      `Juros mensais de $${jurosMensais.toFixed(2)} depositados na conta.`
    );
  }
}

const conta1 = new ContaPoupanca(12345, 1000, 2.5);
const conta2 = new ContaPoupanca(67890, 2000, 3.0);

console.log("Conta 1:");
console.log(`Número da conta: ${conta1.numeroConta}`);
console.log(`Saldo inicial: $${conta1.saldo}`);
console.log(`Taxa de juros anual: ${conta1.taxaJurosAnual}%\n`);

console.log("Conta 2:");
console.log(`Número da conta: ${conta2.numeroConta}`);
console.log(`Saldo inicial: $${conta2.saldo}`);
console.log(`Taxa de juros anual: ${conta2.taxaJurosAnual}%\n`);

conta1.depositarJuros();
conta2.depositarJuros();

console.log("Saldo após depositar juros:");
console.log("Conta 1: $", conta1.saldo);
console.log("Conta 2: $", conta2.saldo);
