// Metodos e propriedades de class
// Usando constructor | Nes | this

class cachorro {
    constructor (raca, cor){
    this.raca = raca;
    this.cor = cor;
 
}

    latir() {
        console.log("Au au")
    }

}
cachorro.prototype.raca ="Raça Indefinida";



let patas = Symbol();
cachorro.prototype[patas] = 4;

let husky = new cachorro('Husky','cinza');

husky.latir();

console.log(cachorro.prototype.raca);
console.log(husky.raca);


console.log(cachorro.prototype[patas]);
