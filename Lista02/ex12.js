// Crie uma classe chamada "Casa" com os atributos endereço, número de quartos e área em metros quadrados.
// Adicione um construtor para inicializar esses atributos.
// Crie objetos de casas e imprima seus detalhes.

class Casa {
  constructor(endereco, NumeroQuartos, metrosQuadrados) {
    this.endereco = endereco;
    this.NumeroQuartos = NumeroQuartos;
    this.metrosQuadrados = metrosQuadrados;
  }
}
casa1 = new Casa("Rua A", 4, 250);
casa2 = new Casa("Rua B", 2, 60);

console.log(casa1);
console.log(casa2);
