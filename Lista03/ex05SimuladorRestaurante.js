// Elabore uma classe Restaurante com atributos como nome, tipo de culinária e menu.
// Inclua métodos como adicionarPratoNoMenu() e receberPedido().
class Restaurante {
  constructor(nome, tipoCulinaria) {
    this.nome = nome;
    this.tipoCulinaria = tipoCulinaria;
    this.menu = [];
  }

  adicionarPratoNoMenu(prato, preco) {
    this.menu.push({ prato, preco });
    console.log(
      `O prato '${prato}' foi adicionado ao menu do restaurante ${this.nome} por ${preco} reais.`
    );
  }

  receberPedido(prato) {
    const pedidoEncontrado = this.menu.find((item) => item.prato === prato);

    if (pedidoEncontrado) {
      console.log(
        `Pedido recebido: ${prato}. Valor: ${pedidoEncontrado.preco} reais.`
      );
    } else {
      console.log(
        `Desculpe, o prato '${prato}' não está disponível no menu do ${this.nome}.`
      );
    }
  }
}

const meuRestaurante = new Restaurante("La Delícia", "Italiana");

meuRestaurante.adicionarPratoNoMenu("Pizza Margherita", 30.0);
meuRestaurante.adicionarPratoNoMenu("Spaghetti Carbonara", 25.0);
meuRestaurante.adicionarPratoNoMenu("Tiramisu", 15.0);

meuRestaurante.receberPedido("Pizza Margherita");
meuRestaurante.receberPedido("Lasanha");
