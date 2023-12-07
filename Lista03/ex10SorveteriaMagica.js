// Elabore uma classe SorveteriaMagica com atributos como nome, sabores e varinhas mágicas.
// Desenvolva métodos para criarSorveteMagico() e realizarFeitiçosGelados().
class SorveteriaMagica {
  constructor(nome, varinhasMagicas) {
    this.nome = nome;
    this.sabores = [];
    this.varinhasMagicas = varinhasMagicas;
  }

  criarSorveteMagico(sabor) {
    if (this.sabores.includes(sabor)) {
      console.log(
        `Desculpe, o sabor ${sabor} já está disponível na sorveteria ${this.nome}. Escolha outro sabor.`
      );
    } else {
      this.sabores.push(sabor);
      console.log(
        `Novo sabor de sorvete mágico '${sabor}' criado na sorveteria ${this.nome}.`
      );
    }
  }

  realizarFeitiçosGelados(cliente, sabor, varinhaMagica) {
    if (this.varinhasMagicas.includes(varinhaMagica)) {
      console.log(
        `${this.nome} está realizando um feitiço gelado com a varinha mágica ${varinhaMagica}.`
      );
      console.log(
        `${cliente} recebeu um sorvete mágico de ${sabor}. Aproveite a magia!`
      );
    } else {
      console.log(
        `Desculpe, a varinha mágica ${varinhaMagica} não está disponível para feitiços gelados na sorveteria ${this.nome}.`
      );
    }
  }
}

const minhaSorveteria = new SorveteriaMagica("MagiaGelada", [
  "Varinha de Gelo",
  "Varinha Encantada",
]);

minhaSorveteria.criarSorveteMagico("Chocolate");
minhaSorveteria.criarSorveteMagico("Morango");

minhaSorveteria.realizarFeitiçosGelados(
  "Cliente1",
  "Chocolate",
  "Varinha de Gelo"
);
minhaSorveteria.realizarFeitiçosGelados(
  "Cliente2",
  "Morango",
  "Varinha Encantada"
);
minhaSorveteria.realizarFeitiçosGelados(
  "Cliente3",
  "Baunilha",
  "Varinha de Fogo"
);
