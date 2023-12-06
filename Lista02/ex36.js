// Crie uma classe chamada "Conta" com os atributos número da conta, saldo e titular da conta.
//  Implemente um construtor para esta classe. Crie um método para verificar se a conta está em débito (saldo negativo)
//   e outro para depositar dinheiro na conta.
// Crie objetos de contas e teste os métodos.
class Conta {
  constructor(numero, saldoInicial, titular) {
    this.numero = numero;
    this.saldo = saldoInicial;
    this.titular = titular;
  }

  estaEmDebito() {
    return this.saldo < 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(
      `Depósito de $${valor.toFixed(2)} realizado na conta ${
        this.numero
      }. Novo saldo: $${this.saldo.toFixed(2)}`
    );
  }
}

const conta1 = new Conta("123456", 1000, "João");
const conta2 = new Conta("789012", -500, "Maria");

console.log("Conta 1:");
console.log(`Número da Conta: ${conta1.numero}`);
console.log(`Titular: ${conta1.titular}`);
console.log(`Saldo: $${conta1.saldo.toFixed(2)}`);
console.log(`Está em débito? ${conta1.estaEmDebito() ? "Sim" : "Não"}`);
conta1.depositar(500);
console.log();

console.log("Conta 2:");
console.log(`Número da Conta: ${conta2.numero}`);
console.log(`Titular: ${conta2.titular}`);
console.log(`Saldo: $${conta2.saldo.toFixed(2)}`);
console.log(`Está em débito? ${conta2.estaEmDebito() ? "Sim" : "Não"}`);
conta2.depositar(1000);
