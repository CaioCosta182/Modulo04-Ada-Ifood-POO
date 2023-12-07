// Projete uma classe ConsoleRetro com atributos como nome, ano de lançamento e jogos disponíveis.
//  Adicione métodos para adicionarJogo() e jogar().
class ConsoleRetro {
  constructor(nome, anoLancamento) {
    this.nome = nome;
    this.anoLancamento = anoLancamento;
    this.jogosDisponiveis = [];
  }

  adicionarJogo(jogo) {
    this.jogosDisponiveis.push(jogo);
    console.log(
      `O jogo ${jogo} foi adicionado aos jogos disponíveis para ${this.nome}.`
    );
  }

  jogar(jogoSelecionado) {
    if (this.jogosDisponiveis.includes(jogoSelecionado)) {
      console.log(
        `Você está jogando ${jogoSelecionado} no ${this.nome}. Divirta-se!`
      );
    } else {
      console.log(
        `Desculpe, o jogo ${jogoSelecionado} não está disponível para ${this.nome}.`
      );
    }
  }
}

const meuConsole = new ConsoleRetro("SuperNes Retro", 1990);

meuConsole.adicionarJogo("Super Mario Bros");
meuConsole.adicionarJogo("The Legend of Zelda");
meuConsole.adicionarJogo("Mega Man");

meuConsole.jogar("Super Mario Bros");
meuConsole.jogar("Sonic the Hedgehog");
