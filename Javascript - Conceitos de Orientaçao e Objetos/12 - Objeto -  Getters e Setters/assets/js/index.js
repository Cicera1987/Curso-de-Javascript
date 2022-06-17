// Metodos e propriedades de class
// Getters e Setters
// Get resgata um valor de uma propriedade;
// Set altera o valor de uma propriedade;

class cachorro {
    constructor (raca, cor){
    this.raca = raca;
    this.cor = cor;
 
}

    latir() {
        console.log("Au au")
    }
    get getcor(){
        return this.cor;
    }

    set setcor(cor){
        this.cor = cor;
    }

}
let pastor = new cachorro('Pastor Alemão', 'Sem cor definida');

console.log(pastor);
pastor.latir();

pastor.setcor = 'Marrom' // definindo um cor para o dog
console.log(pastor.getcor);
