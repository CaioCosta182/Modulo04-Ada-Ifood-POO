// Desenvolva uma classe chamada "Relógio" com os atributos hora, minuto e segundo.
// Implemente um construtor para esta classe. Crie métodos para ajustar o relógio, adicionar um segundo e exibir a hora atual.
// Crie objetos de relógio e teste os métodos.
class Relogio {
  constructor(hora, minuto, segundo) {
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
  }

  ajustarRelogio(novaHora, novoMinuto, novoSegundo) {
    this.hora = novaHora;
    this.minuto = novoMinuto;
    this.segundo = novoSegundo;
  }

  adicionarSegundo() {
    this.segundo += 1;
    if (this.segundo === 60) {
      this.segundo = 0;
      this.minuto += 1;

      if (this.minuto === 60) {
        this.minuto = 0;
        this.hora += 1;

        if (this.hora === 24) {
          this.hora = 0;
        }
      }
    }
  }

  exibirHoraAtual() {
    console.log(`${this.hora}:${this.minuto}:${this.segundo}`);
  }
}

const relogio1 = new Relogio(12, 30, 45);

console.log("Relógio 1:");
relogio1.exibirHoraAtual();
relogio1.adicionarSegundo();
relogio1.exibirHoraAtual();
relogio1.ajustarRelogio(14, 45, 30);
relogio1.exibirHoraAtual();
