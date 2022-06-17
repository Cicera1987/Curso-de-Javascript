// Criando (Instaciando ) classes (objetos) por função.

function criaCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au au");
    }

    return cachorro;
}

let labrador = criaCachorro('labrador', 4, 'preta');
console.log(labrador);

labrador.latir();

/******************************************************** */
// Outro exemplo

function criacrianca(sexo, cor, cabelo){
    let crianca = Object.create({});
    crianca.sexo = sexo;
    crianca.cor = cor;
    crianca.cabelo = cabelo;
    crianca.sorrir = function(){
        console.log("hahahaha");
    }

    return crianca;
}

let crianca = criacrianca('feminino', 'negra', 'cachedo');
console.log(crianca);
crianca.sorrir();

/******************************************************** */
// Outro exemplo
function criaCasa(tipo, quartos, pintura, espaco){
    let casa = Object.create({});
    casa.tipo = tipo;
    casa.quartos = quartos;
    casa.pintura = pintura;
    casa.espaco = espaco;
    return casa;
}


let casa = criaCasa('Sobrado', 4, 'verde', 'jardim e piscina');
console.log(casa);


