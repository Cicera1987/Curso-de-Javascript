
// For clássico - Lê os indeces ou chaves de objeto.(Arrays ou strings)
// For in -  Retorna o indice ou chave (string, array ou abjetos)
// For of -  Retorna o valor em si (iteráveis, arrays ou strings)


const frutas = [ 'Pera',  'Maçã', 'Uva', ];
    for (let x in frutas) {
        console.log(` O Índice ${x} é`,frutas[x]);
}
console.log('**************');



/************************************** */
// Meu for (in) --------------------------
const pessoa = {
    Nome: 'Cicera',
    Sobrenome: 'Ribeiro',
    Idade: 35,
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
console.log('**************');



/************************************** */
//For (of) ------------------------------
const nome = ['Cícera', 'Ribeiro'];

for (let valor of nome){
console.log(valor);

}
console.log('**************');



/************************************** */
//ForEach) -------------------------------
const nomes = ['Cicera', 'Santos'];
    nomes.forEach(function(valor, indice){
        console.log(valor, indice);
    });

