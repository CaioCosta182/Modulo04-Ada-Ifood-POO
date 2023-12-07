// Desenvolva uma classe EstudioArteDigital com atributos como nome, equipamentos e obras de arte.
// Inclua métodos para criarArteDigital() e exporObras().
class EstudioArteDigital {
  constructor(nome, equipamentos) {
    this.nome = nome;
    this.equipamentos = equipamentos;
    this.obrasDeArte = [];
  }

  criarArteDigital(tipoArte, descricao) {
    const novaObra = {
      tipo: tipoArte,
      descricao: descricao,
    };
    this.obrasDeArte.push(novaObra);
    console.log(
      `Nova obra de arte digital criada no estúdio ${this.nome}. Tipo: ${tipoArte}. Descrição: ${descricao}.`
    );
  }

  exporObras() {
    console.log(`Obras de arte digitais do estúdio ${this.nome}:`);
    this.obrasDeArte.forEach((obra, index) => {
      console.log(
        `${index + 1}. Tipo: ${obra.tipo}. Descrição: ${obra.descricao}`
      );
    });
  }
}

const meuEstudio = new EstudioArteDigital("ArteDigitalStudio", [
  "Tablet Gráfico",
  "Computador Potente",
]);

meuEstudio.criarArteDigital("Ilustração Digital", "Retrato de um Cyberpunk");
meuEstudio.criarArteDigital("Animação 3D", "Cena Futurista");
meuEstudio.criarArteDigital("Design de Interface", "Aplicativo Inovador");

meuEstudio.exporObras();
