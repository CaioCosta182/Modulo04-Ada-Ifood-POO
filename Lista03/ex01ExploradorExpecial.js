// Exercício 1: Explorador Espacial
// Crie uma classe NaveEspacial com atributos como nome, velocidade máxima e capacidade de tripulação.
// Implemente métodos como acelerar() e adicionarTripulante().

class NaveEspacial {
  constructor(nome, velocidadeMaxima, capacidadeTripulacao) {
    this.nome = nome;
    this.velocidadeMaxima = velocidadeMaxima;
    this.capacidadeTripulacao = capacidadeTripulacao;
    this.velocidadeAtual = 0;
    this.tripulacao = [];
  }

  acelerar(aceleracao) {
    if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
      this.velocidadeAtual += aceleracao;
      console.log(`${this.nome} acelerou para ${this.velocidadeAtual} km/s.`);
    } else {
      console.log(
        `${this.nome} atingiu a velocidade máxima de ${this.velocidadeMaxima} km/s.`
      );
      this.velocidadeAtual = this.velocidadeMaxima;
    }
  }

  adicionarTripulante(nomeTripulante) {
    if (this.tripulacao.length < this.capacidadeTripulacao) {
      this.tripulacao.push(nomeTripulante);
      console.log(
        `${nomeTripulante} foi adicionado à tripulação de ${this.nome}.`
      );
    } else {
      console.log(
        `A tripulação de ${this.nome} está completa. Não é possível adicionar mais tripulantes.`
      );
    }
  }
}

const minhaNave = new NaveEspacial("Estelar", 300000, 5);

minhaNave.acelerar(200000);
minhaNave.adicionarTripulante("Comandante");
minhaNave.adicionarTripulante("Piloto");
minhaNave.acelerar(150000);
minhaNave.adicionarTripulante("Engenheiro");
minhaNave.adicionarTripulante("Médico");
