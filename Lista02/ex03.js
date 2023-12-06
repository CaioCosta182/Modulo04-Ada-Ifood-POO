// Crie uma classe chamada "ContaBancaria" com os atributos número da conta, saldo e nome do titular.
//  Adicione um construtor para inicializar esses atributos. Crie métodos para depositar e sacar dinheiro da conta.
// Teste esses métodos em objetos de conta bancária.

class ContaBancaria {
  constructor(numeroConta, saldo, titular) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.titular = titular;
  }
}

function depositar(valor) {
  if (valor > 0) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  } else {
    console.log("O valor do depósito deve ser maior que zero.");
  }
}

function sacar(valor) {
  if (valor > 0 && valor <= this.saldo) {
    this.saldo -= valor;
    console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
  } else {
    console.log("Saldo insuficiente ou valor inválido para saque.");
  }
}

const conta1 = new ContaBancaria(12345, 1000, "João");
const conta2 = new ContaBancaria(67890, 500, "Maria");

console.log("Conta 1 - Informações iniciais:");
console.log(`Número da conta: ${conta1.numeroConta}`);
console.log(`Saldo: ${conta1.saldo}`);
console.log(`Titular: ${conta1.titular}\n`);

console.log("Conta 2 - Informações iniciais:");
console.log(`Número da conta: ${conta2.numeroConta}`);
console.log(`Saldo: ${conta2.saldo}`);
console.log(`Titular: ${conta2.titular}\n`);

conta1.depositar(500);
conta2.sacar(200);

console.log("\nConta 1 - Informações após operações:");
console.log(`Saldo: ${conta1.saldo}\n`);

console.log("Conta 2 - Informações após operações:");
console.log(`Saldo: ${conta2.saldo}`);
