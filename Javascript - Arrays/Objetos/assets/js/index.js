//Objeto do dog

let cachorro = {
    patas: 4,
    nome: 'Scoob',
    latir: function(){
        console.log("Au Au");
    }
}
console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();

// Objeto da menima

let menina = {
    nome: 'Ana',
    idade: 7,
    atividade: 'Balé',
    sorrir: function(){
        console.log("Hahahaha")
    }
}
console.log('Nome:',menina.nome);
console.log('Idade:',menina.idade);
console.log('atividade:',menina.atividade);
menina.sorrir();

