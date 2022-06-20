// var, let e const

/******************************** */
//var - ele dá o memso valor tanto para o ecopo global comoo 
// dentro do bloco if

var x = 10;
var y = 15;

if(y > 10) {
    var x = 5 
    console.log(x)
}

console.log(x)



/******************************** */
//let - Tem mais confiabilidade, pois separa as variaveis
// Separa escopo global com blocos
// mesmo o nome da variavel sendo o mesmo.
let a = 10
let b = 15

if( b > 10 ) {
    let a = 5
    console.log(a)
}

console.log(a)

/********************************** */
let i = 100; // - Escopo global

for(let i = 0; i < 5; i++){  // bloco do for
    console.log(i)
}

console.log(i) // escopo global

/******************************** */
//Const - Sua variavel será constante, a mesma do inicio ao fim.
// 
//

function logName() {
    const name = 'Cícera'
    console.log(name)
}

const name = 'Pedro'

logName();

console.log(name);