// Defina uma classe chamada "Viagem" com os atributos destino, data de partida e data de retorno.
// Implemente um construtor para esta classe. Crie um método para calcular a duração da viagem em dias.
// Crie objetos de viagens e teste o método de cálculo de duração.

class Viagem {
  constructor(destino, dataPartida, dataRetorno) {
    this.destino = destino;
    this.dataPartida = new Date(dataPartida);
    this.dataRetorno = new Date(dataRetorno);
  }

  calcularDuracao() {
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const diferencaEmMilissegundos = this.dataRetorno - this.dataPartida;
    const duracaoEmDias = Math.round(
      diferencaEmMilissegundos / umDiaEmMilissegundos
    );
    return duracaoEmDias;
  }
}

const viagem1 = new Viagem("Paris", "2023-07-01", "2023-07-10");
const viagem2 = new Viagem("Nova York", "2023-08-15", "2023-08-30");

console.log("Viagem 1:");
console.log(`Destino: ${viagem1.destino}`);
console.log(
  `Data de Partida: ${viagem1.dataPartida.toISOString().split("T")[0]}`
);
console.log(
  `Data de Retorno: ${viagem1.dataRetorno.toISOString().split("T")[0]}`
);
console.log(`Duração da Viagem: ${viagem1.calcularDuracao()} dias\n`);

console.log("Viagem 2:");
console.log(`Destino: ${viagem2.destino}`);
console.log(
  `Data de Partida: ${viagem2.dataPartida.toISOString().split("T")[0]}`
);
console.log(
  `Data de Retorno: ${viagem2.dataRetorno.toISOString().split("T")[0]}`
);
console.log(`Duração da Viagem: ${viagem2.calcularDuracao()} dias`);
