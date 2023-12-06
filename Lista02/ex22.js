// Crie uma classe chamada "Hotel" com os atributos nome, localização e lista de quartos.
// Implemente um construtor para inicializar esses atributos e métodos para reservar quartos e verificar a disponibilidade.
//  Crie objetos de hotéis e teste os métodos.
class Hotel {
  constructor(nome, localizacao, totalQuartos) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.listaQuartos = Array.from({ length: totalQuartos }, (_, index) => ({
      numero: index + 1,
      disponivel: true,
    }));
  }

  reservarQuarto(numeroQuarto) {
    const quarto = this.listaQuartos.find(
      (quarto) => quarto.numero === numeroQuarto
    );

    if (quarto) {
      if (quarto.disponivel) {
        quarto.disponivel = false;
        console.log(`Quarto ${numeroQuarto} reservado com sucesso.`);
      } else {
        console.log(`Quarto ${numeroQuarto} já está ocupado.`);
      }
    } else {
      console.log(`Quarto ${numeroQuarto} não encontrado.`);
    }
  }

  verificarDisponibilidade() {
    const quartosDisponiveis = this.listaQuartos.filter(
      (quarto) => quarto.disponivel
    );
    console.log(
      `Quartos disponíveis em ${this.nome}: ${quartosDisponiveis
        .map((quarto) => quarto.numero)
        .join(", ")}`
    );
  }
}

const hotel1 = new Hotel("Hotel A", "Centro", 10);
const hotel2 = new Hotel("Hotel B", "Praia", 15);

console.log("Hotel 1:");
console.log(`Nome: ${hotel1.nome}`);
console.log(`Localização: ${hotel1.localizacao}\n`);

console.log("Hotel 2:");
console.log(`Nome: ${hotel2.nome}`);
console.log(`Localização: ${hotel2.localizacao}\n`);

hotel1.verificarDisponibilidade();
hotel1.reservarQuarto(5);
hotel1.reservarQuarto(8);
hotel1.verificarDisponibilidade();

console.log();

hotel2.verificarDisponibilidade();
hotel2.reservarQuarto(7);
hotel2.reservarQuarto(12);
hotel2.verificarDisponibilidade();
