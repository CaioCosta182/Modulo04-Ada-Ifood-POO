// Desenvolva uma classe Dragao com atributos como nome, cor, elemento (fogo, gelo, etc.) e nível de saúde.
// Inclua métodos como voar(), cuspirFogo() e comer().

class Dragao {
  constructor(nome, cor, elemento, nivelSaude) {
    this.nome = nome;
    this.cor = cor;
    this.elemento = elemento;
    this.nivelSaude = nivelSaude;
  }

  voar() {
    console.log(`${this.nome} está voando pelos céus.`);
  }

  cuspirFogo() {
    console.log(
      `${this.nome} está cuspindo fogo do elemento ${this.elemento}.`
    );
  }

  comer(alimento) {
    if (alimento === "carne") {
      this.nivelSaude += 10;
      console.log(
        `${this.nome} comeu carne e ganhou 10 pontos de saúde. Nível de saúde atual: ${this.nivelSaude}`
      );
    } else {
      console.log(`${this.nome} não gosta de ${alimento}.`);
    }
  }
}

const meuDragao = new Dragao("Fúria da Noite", "preto", "fogo", 80);

meuDragao.voar();
meuDragao.cuspirFogo();
meuDragao.comer("peixe");
meuDragao.comer("carne");
