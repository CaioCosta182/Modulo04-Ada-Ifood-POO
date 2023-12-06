// Desenvolva uma classe chamada "Câmera" com os atributos marca, modelo e resolução.
// Implemente um construtor para esta classe. Crie métodos para tirar fotos e gravar vídeos.
// Crie objetos de câmeras e teste os métodos.
class Camera {
  constructor(marca, modelo, resolucao) {
    this.marca = marca;
    this.modelo = modelo;
    this.resolucao = resolucao;
  }

  tirarFoto() {
    console.log(
      `[${this.marca} ${this.modelo}] Foto tirada com resolução ${this.resolucao}.`
    );
  }

  gravarVideo() {
    console.log(
      `[${this.marca} ${this.modelo}] Vídeo gravado com resolução ${this.resolucao}.`
    );
  }
}

const camera1 = new Camera("Canon", "EOS Rebel T7i", "24 MP");
const camera2 = new Camera("Sony", "Alpha a7 III", "24.2 MP");

console.log("Câmera 1:");
console.log(`Marca: ${camera1.marca}`);
console.log(`Modelo: ${camera1.modelo}`);
console.log(`Resolução: ${camera1.resolucao}`);
camera1.tirarFoto();
camera1.gravarVideo();
console.log();

console.log("Câmera 2:");
console.log(`Marca: ${camera2.marca}`);
console.log(`Modelo: ${camera2.modelo}`);
console.log(`Resolução: ${camera2.resolucao}`);
camera2.tirarFoto();
camera2.gravarVideo();
