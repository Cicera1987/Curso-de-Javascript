// Com a versão ES6 pode criar uma classe(objeto)
// com o construcor - Sem necessitar de um função;
// usando já o new com this;

class cachorro{
    constructor(raca, patas, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;

    }
}

let pastorAlemao = new cachorro('Pastor Alemão', 4, 'preta');
console.log(pastorAlemao);




