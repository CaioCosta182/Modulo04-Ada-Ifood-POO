// Crie uma classe ParqueEcológico com atributos como nome, localização e tipos de fauna e flora.
// Implemente métodos para adicionarEspécie() e organizarTourVirtual().

class ParqueEcologico {
  constructor(nome, localizacao) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.fauna = [];
    this.flora = [];
  }

  adicionarEspecie(tipo, especie) {
    if (tipo === "fauna") {
      this.fauna.push(especie);
      console.log(
        `A espécie ${especie} foi adicionada à fauna do ${this.nome}.`
      );
    } else if (tipo === "flora") {
      this.flora.push(especie);
      console.log(
        `A espécie ${especie} foi adicionada à flora do ${this.nome}.`
      );
    } else {
      console.log("Tipo inválido. Especifique 'fauna' ou 'flora'.");
    }
  }

  organizarTourVirtual() {
    console.log(`Bem-vindo ao tour virtual pelo ${this.nome}!`);
    console.log(`Localização: ${this.localizacao}`);
    console.log("Fauna:");
    this.fauna.forEach((especie, index) => {
      console.log(`${index + 1}. ${especie}`);
    });
    console.log("Flora:");
    this.flora.forEach((especie, index) => {
      console.log(`${index + 1}. ${especie}`);
    });
  }
}

const meuParque = new ParqueEcologico("Parque Natural", "Floresta Tropical");

meuParque.adicionarEspecie("fauna", "Tigre");
meuParque.adicionarEspecie("fauna", "Papagaio");
meuParque.adicionarEspecie("flora", "Orquídea");
meuParque.adicionarEspecie("flora", "Cedro");

meuParque.organizarTourVirtual();
