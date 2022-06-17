// Todo objeto tem um Prototype

// exemplo:

const pessoa = { // pessoa é o objeto pai.
    maos: 2,     // mãos é uma propriedade do Objeto pessoa.
}
/*
console.log(Object.getPrototypeOf(pessoa)); // mostrando que é um objeto no consele
console.log(Object.getPrototypeOf(pessoa)) === Object.prototype; // Mostrandoo que meu objeto é um prototype

console.log(pessoa.hasOwnProperty("maos")); // mostrando que há uma propriedade no meu objeto pai.
*/

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty("maos"));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);