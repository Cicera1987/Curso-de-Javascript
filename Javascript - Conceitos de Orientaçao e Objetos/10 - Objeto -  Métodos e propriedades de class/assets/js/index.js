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

cachorro.prototype.patas = 4; 

let husky = new cachorro('Husky', 'cinza');

console.log(husky.patas);

husky.latir();
