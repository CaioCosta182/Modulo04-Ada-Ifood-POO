// Crie uma classe ClubeAstronomia com atributos como nome, local e membros.
// Desenvolva métodos para realizarObservacao() e organizarEventosEstelares().
class ClubeAstronomia {
  constructor(nome, local) {
    this.nome = nome;
    this.local = local;
    this.membros = [];
  }

  realizarObservacao(objetoCeleste) {
    console.log(
      `O clube ${this.nome} está realizando uma observação de ${objetoCeleste} esta noite.`
    );
  }

  organizarEventosEstelares(data, descricao) {
    console.log(`Evento estelar organizado pelo clube ${this.nome}:
  Data: ${data}
  Descrição: ${descricao}`);
  }

  adicionarMembro(nomeMembro) {
    this.membros.push(nomeMembro);
    console.log(
      `${nomeMembro} foi adicionado como membro do clube ${this.nome}.`
    );
  }

  listarMembros() {
    console.log(`Membros do clube ${this.nome}:`);
    this.membros.forEach((membro, index) => {
      console.log(`${index + 1}. ${membro}`);
    });
  }
}

const meuClubeAstronomia = new ClubeAstronomia(
  "AstroClub",
  "Observatório Municipal"
);

meuClubeAstronomia.adicionarMembro("Alice");
meuClubeAstronomia.adicionarMembro("Bob");
meuClubeAstronomia.adicionarMembro("Charlie");

meuClubeAstronomia.listarMembros();

meuClubeAstronomia.realizarObservacao("Lua Cheia");
meuClubeAstronomia.organizarEventosEstelares(
  "20/02/2023",
  "Noite de Observação de Estrelas Cadentes"
);
