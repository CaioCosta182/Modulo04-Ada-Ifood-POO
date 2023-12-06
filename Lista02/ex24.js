// Crie uma classe chamada "Calendário" com os atributos dia, mês e ano.
// Implemente um construtor para esta classe.
// Crie um método para verificar se uma data é válida (levando em consideração os meses com diferentes números de dias).
// Crie objetos de calendário e teste o método.

class Calendario {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  static verificarDataValida(dia, mes, ano) {
    if (ano < 1 || ano > 9999 || mes < 1 || mes > 12 || dia < 1) {
      return false;
    }

    const diasNoMes = new Date(ano, mes, 0).getDate();

    return dia <= diasNoMes;
  }
}

const data1 = new Calendario(25, 12, 2022);
const data2 = new Calendario(31, 4, 2023);

console.log("Data 1:");
console.log(`Dia: ${data1.dia}`);
console.log(`Mês: ${data1.mes}`);
console.log(`Ano: ${data1.ano}`);
console.log(
  `É uma data válida? ${Calendario.verificarDataValida(
    data1.dia,
    data1.mes,
    data1.ano
  )}\n`
);

console.log("Data 2:");
console.log(`Dia: ${data2.dia}`);
console.log(`Mês: ${data2.mes}`);
console.log(`Ano: ${data2.ano}`);
console.log(
  `É uma data válida? ${Calendario.verificarDataValida(
    data2.dia,
    data2.mes,
    data2.ano
  )}`
);
