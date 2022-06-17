// Com a versão ES6 pode criar uma classe(objeto)
// com o construcor - Sem necessitar de um função;
// usando já o new com this;




/**************************************************** */
// Override no Prototype
class cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;

    }
    latir(){
        console.log("Au au");
    }
}

cachorro.prototype.raca = 'Não definida';
cachorro.prototype.patas = 4;


let pastorAlemao = new cachorro('Pastor Alemão', 'preta');
console.log(pastorAlemao.patas);

pastorAlemao.latir();

console.log(cachorro.prototype.raca);
console.log(pastorAlemao.raca);




