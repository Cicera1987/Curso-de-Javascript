let cachorro = { // cacchoro é meu Prototype - objeto pai
    patas:4, 
    raca:'Raça indefinida',
    latir: function(){
        console.log("Au au");
    }
}

let labrador = Object.create(cachorro); // O Labrador e demais elementos creados são derivado do cachorro.

labrador.latir();
labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);

let shitz = Object.create(cachorro);
shitz.raca = "Shitz";
console.log(shitz.raca);
shitz.latir();
shitz.patas = 4;
console.log(shitz.patas);
shitz.pelos = "Marrom";
console.log(shitz.pelos);