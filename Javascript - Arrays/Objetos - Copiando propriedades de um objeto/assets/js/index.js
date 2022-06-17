//Objeto: Copiando objetos de uma propriedades.
// Podemos adicionar, copiar ou criar propriedades dentro do nosso código.
// Usando   ----> object.assign <-----

let carro = {
  portas: 2,
  portamalas: "200L",
  motor: "2.0",
}
console.log(carro);

/***************************** */
// Adicionando objetos Usando ---> object.assign <---

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

Object.assign(carro,adicionais);
console.log(carro);




