// Defina uma classe chamada "Cachorro" com os atributos nome, raça e idade. Implemente um construtor para esta classe.
// Crie um método para latir (exibir uma mensagem de latido) e outro método para calcular a idade humana do cachorro com base na idade real.
//  Crie objetos de cachorros e teste os métodos.
class Cachorro {
  constructor(nome, raca, idade) {
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
  }

  latir() {
    console.log(`${this.nome} está latindo: Au Au!`);
  }

  calcularIdadeHumana() {
    const idadeHumana = this.idade * 7;
    return idadeHumana;
  }
}

const cachorro1 = new Cachorro("Bob", "Labrador", 3);
const cachorro2 = new Cachorro("yoko", "Akita", 5);

console.log("Cachorro 1:");
console.log(`Nome: ${cachorro1.nome}`);
console.log(`Raça: ${cachorro1.raca}`);
console.log(`Idade real: ${cachorro1.idade} anos`);
cachorro1.latir();
console.log(
  `Idade humana aproximada: ${cachorro1.calcularIdadeHumana()} anos\n`
);

console.log("Cachorro 2:");
console.log(`Nome: ${cachorro2.nome}`);
console.log(`Raça: ${cachorro2.raca}`);
console.log(`Idade real: ${cachorro2.idade} anos`);
cachorro2.latir();
console.log(`Idade humana aproximada: ${cachorro2.calcularIdadeHumana()} anos`);
