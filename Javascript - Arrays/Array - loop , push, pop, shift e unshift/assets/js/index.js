// laço de repetição em array
// loop - push - pop  - shift - unshif

let nomes = ["Maria", "Pedro", "João", "Ana", ];

for (let i = 0; i <= nomes.length; i++) {
  console.log(nomes[i]);
}

let flor = ["rosa", "cravo", "tulipa"];

for (let i = 0; i <= flor.length; i++) {
    console.log(flor[i]);
  
}

let carro = ["mercede", "opala", "camaro"];
  for( let i = 0; i <= carro.length; i++){
  console.log(carro[i]);
  }


  let fruta = ['manga', 'pera', 'uva'];
    for( i = 0; i <= fruta.length; i++){
      console.log(fruta[i]);
    }

    let num = [1,2,3,4,25,33];
      for(i = 0; i <= num.length; i++){
        console.log(num[5]);
      }
/*************************************** */
//Push e Pop
// Pop remove um elementono fim do array.
// Push adiciona um elemento no fim do array.

let carros = ["Mercede", "Opala", "Camaro"]; // (Camaro) ultimo elemento
let elementoRemovido = carros.pop();

console.log(elementoRemovido);
console.log(carros);

carros.push("Savero");
console.log(carros);

/************************************ */

//Shift Unshift
// Shift remove um elementono inicio do array.
// Unshift adiciona um elemento no inicio do array.

let frutas = ['Manga', 'Pera', 'Uva'];
let removePrimeiroitem = frutas.shift();

console.log(removePrimeiroitem);
console.log(frutas);

frutas.unshift("Melão");
console.log(frutas);
