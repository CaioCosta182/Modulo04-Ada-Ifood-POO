// Crie uma classe chamada "Celular" com os atributos marca, modelo e armazenamento interno.
// Implemente um construtor para esta classe. Crie métodos para adicionar aplicativos ao celular e verificar o espaço disponível.
// Crie objetos de celulares e teste os métodos.
class Celular {
  constructor(marca, modelo, armazenamento) {
    this.marca = marca;
    this.modelo = modelo;
    this.armazenamento = armazenamento;
  }
  adicionarApp() {
    const app = 15;
    if (app <= this.armazenamento) {
      console.log("Aplicativo adicionado com sucesso");
    } else {
      console.log(
        "Espaço em disco insuficiente, apague algum aplicativo para adicionar um novo."
      );
    }
  }
}
celular01 = new Celular("Sony", "A52", 14);
celular02 = new Celular("Xiaomi", "Poco X3 Pro", 128);
