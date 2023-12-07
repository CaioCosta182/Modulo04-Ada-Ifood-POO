// Crie uma classe ExploradorOceanoProfundo com atributos como nome, submarino e descobertas submarinas.
// Implemente métodos para mergulhar(), coletarAmostras() e estudarCriaturasMarinhas().

class ExploradorOceanoProfundo {
  constructor(nome, submarino) {
    this.nome = nome;
    this.submarino = submarino;
    this.descobertasSubmarinas = [];
  }

  mergulhar(profundidade) {
    console.log(
      `${this.nome} está mergulhando para a profundidade de ${profundidade} metros no submarino ${this.submarino}.`
    );
  }

  coletarAmostras(local, tipoAmostra) {
    const novaAmostra = {
      local: local,
      tipo: tipoAmostra,
    };
    this.descobertasSubmarinas.push(novaAmostra);
    console.log(
      `${this.nome} coletou uma amostra de ${tipoAmostra} em ${local}.`
    );
  }

  estudarCriaturasMarinhas() {
    console.log(
      `Explorador ${this.nome} está estudando criaturas marinhas no fundo do oceano.`
    );
    this.descobertasSubmarinas.forEach((amostra, index) => {
      console.log(
        `${index + 1}. Amostra coletada em ${amostra.local}. Tipo: ${
          amostra.tipo
        }.`
      );
    });
  }
}

const meuExplorador = new ExploradorOceanoProfundo(
  "AquaPesquisador",
  "SubmarinoExplorador2000"
);

meuExplorador.mergulhar(1000);
meuExplorador.coletarAmostras("Gruta Submarina", "Coral");
meuExplorador.coletarAmostras("Rift Oceânico", "Microorganismos Marinhos");
meuExplorador.estudarCriaturasMarinhas();
