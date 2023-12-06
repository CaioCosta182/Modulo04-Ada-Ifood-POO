// Crie uma classe chamada "Animal" com os atributos nome, espécie e idade.
// Implemente um construtor para esta classe. Crie objetos de animais e exiba suas informações.
class Animal {
  constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }
}
animal1 = new Animal("Garfield", "Gato", 45);
animal2 = new Animal("Totó", "Cachorro", 25);
animal3 = new Animal("Matilda", "Pato", 5);

console.log(animal1);
console.log(animal2);
console.log(animal3);
