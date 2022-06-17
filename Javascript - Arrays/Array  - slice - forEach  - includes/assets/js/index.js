// Array Slice
// Retorna um array a partir de outro array
// O array retornado é determinadopelos parametros que são os
// Indices de inico do novo array

//indice ->    0  1  2  3  4  5  6  7<-   
let numeros = [0, 3, 8, 6, 1, 5, 6, 7]; 

console.log(numeros.slice(4,5));
console.log(numeros.slice(4,6));
console.log(numeros.slice(2));
console.log(numeros.slice(-2));
console.log(numeros.slice(3));

/********************************************** */
//Método de array: ForEach
//Itera cada elemento do array;


let nomes = ["Mari","Poul", "Luma","Any",];
nomes.forEach(nome =>{
    console.log('O nome é ' + nome);
});


/********************************************** */
//Método de array: Includes
//Verifica se o array tem um determinado elemento;
// vc acha uma agulha no palheiro

let carros= ["BMW", "Corsa", "Onix", "Opala", "Camaro", "VW", "Cruze", "Palio", "Zafira", "Ômega", "S10",]
console.log(carros.includes("S10"));
console.log(carros.indexOf("S10"));
