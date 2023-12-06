// Exercício 1
// Crie um objeto literal representando um carro com os seguintes atributos: marca, modelo, ano e cor.

let carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: "1997",
  cor: "Vermelho",
};
//Exercício 2
//Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).

var circulo = {
  raio: 5,

  calcularArea: function () {
    return Math.PI * Math.pow(this.raio, 2);
  },
};

console.log("Raio do círculo:", circulo.raio);
console.log("Área do círculo:", circulo.calcularArea());

// Exercício 3
// Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.

var aluno = {
  nome: "João",
  idade: 20,

  mostrarInformacoes: function () {
    console.log("Nome do aluno:", this.nome);
    console.log("Idade do aluno:", this.idade);
  },
};

aluno.mostrarInformacoes();

// Exercício 4
// Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.

var livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",

  detalhes: function () {
    console.log("Título do livro:", this.titulo);
    console.log("Autor do livro:", this.autor);
  },
};

livro.detalhes();

// Exercício 5
// Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

var meuRetangulo = new Retangulo(5, 10);
console.log("Área do retângulo:", meuRetangulo.calcularArea());
