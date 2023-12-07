// Projete uma classe ConstrutorCastelos com atributos como nome, estilo arquitetônico e materiais usados.
// Implemente métodos para construirTorre() e adicionarAposentos().
class ConstrutorCastelos {
  constructor(nome, estiloArquitetonico, materiaisUsados) {
    this.nome = nome;
    this.estiloArquitetonico = estiloArquitetonico;
    this.materiaisUsados = materiaisUsados;
    this.torresConstruidas = 0;
    this.aposentos = [];
  }

  construirTorre() {
    this.torresConstruidas++;
    console.log(
      `Uma nova torre foi construída para o castelo ${this.nome}. Total de torres: ${this.torresConstruidas}.`
    );
  }

  adicionarAposentos(tipo, quantidade) {
    const novoAposento = {
      tipo: tipo,
      quantidade: quantidade,
    };
    this.aposentos.push(novoAposento);
    console.log(
      `${quantidade} aposentos do tipo ${tipo} foram adicionados ao castelo ${this.nome}.`
    );
  }
}

const meuCastelo = new ConstrutorCastelos(
  "Castelo Fantástico",
  "Gótico",
  "Pedra"
);

meuCastelo.construirTorre();
meuCastelo.adicionarAposentos("Quarto", 5);
meuCastelo.adicionarAposentos("Sala de Banquete", 1);
meuCastelo.construirTorre();
