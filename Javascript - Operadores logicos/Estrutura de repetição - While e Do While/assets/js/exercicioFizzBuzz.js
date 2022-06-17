// EXERCICIOS
// Escreva uma função com numeros de 0 a 100
// Retorne o segunte
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero divisivwel por 3 e 5 = fizzBuzz
// Numero não divivel por 3 e 5 = retorne o proprio numero
// Checar se o numero é number ou string = caso seja string retorne o proprio numero


function fizzBuzz (numero) {
   if(typeof numero !== 'number') return numero;
   if ( numero % 3 == 0 && numero % 5 == 0 ) return 'FizzBuzz';
   if ( numero % 3 == 0 ) return 'Fizz';
   if ( numero % 5 == 0 ) return 'Buzz';
   return numero;

}
   console.log ('a', fizzBuzz ('a'))
for (let i = 0; i <= 30; i++) {
   console.log( i, fizzBuzz(i))
}



