// Criando (Instaciando ) classes (objetos) por new.
// Usando this

function cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuu");
        this.latir = function(){
            console.log("Au au");

        }
    }
}

let husky = new cachorro('Husky', 4, 'cinza')
console.log(husky);
husky.uivar();
husky.latir();