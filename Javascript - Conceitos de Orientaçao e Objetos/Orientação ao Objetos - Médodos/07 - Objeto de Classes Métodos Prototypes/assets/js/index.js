// Criando (Instaciando ) classes (objetos) por new.
// Usando this

function cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
 
}

cachorro.prototype.uivar = function(){
    console.log("Auuuuuuu");
}

cachorro.prototype.latir = function(){
    console.log("Au au au");
}

let husky = new cachorro('Husky', 4, 'cinza')
console.log(husky);

husky.uivar();
husky.latir();