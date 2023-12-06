// Crie uma classe chamada "Telefone" com os atributos marca, modelo e número de série.
// Implemente um construtor para esta classe. Crie um método para fazer chamadas telefônicas
//  e outro para enviar mensagens de texto.
// Crie objetos de telefones e teste os métodos.
class Telefone {
  constructor(marca, modelo, numeroSerie) {
    this.marca = marca;
    this.modelo = modelo;
    this.numeroSerie = numeroSerie;
  }

  fazerChamada(numero) {
    console.log(
      `[${this.marca} ${this.modelo} - ${this.numeroSerie}] Chamando o número ${numero}`
    );
  }

  enviarMensagemTexto(numero, mensagem) {
    console.log(
      `[${this.marca} ${this.modelo} - ${this.numeroSerie}] Enviando mensagem para o número ${numero}: "${mensagem}"`
    );
  }
}

const telefone1 = new Telefone("Samsung", "Galaxy S21", "SN123456");
const telefone2 = new Telefone("Apple", "iPhone 12", "SN789012");

console.log("Telefone 1:");
telefone1.fazerChamada("23456-7890");
telefone1.enviarMensagemTexto("987-654-3210", "Olá, como você está?");
console.log();

console.log("Telefone 2:");
telefone2.fazerChamada("55123-4567");
telefone2.enviarMensagemTexto("98654-3210", "Estou bem, obrigado!");
