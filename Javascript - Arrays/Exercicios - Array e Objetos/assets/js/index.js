//Sessão de exercicios de Array e Objetos

// 01 -  Crie um array com 5 itens - acesse o item 1,3,4;
// indice     0      1      2       3         4
let itens = ['pé', 'mão', 'olho', 'nariz', 'cabeça',];

console.log(itens[1]);
console.log(itens[3]);
console.log(itens[4]);

//retornando todos os elementos do array 
let itens2 = ['pé', 'mão', 'olho', 'nariz', 'cabeça',];
    for(i = 0; i < itens2.length; i++){
        console.log(itens2[i]);
}



/******************************************************** */
// 02 - crie um array com 2 elementos e outro com 4;
//Imprima o numero de elementos de cada um na tela;
let fruta = ["Pera", "Uva",];
let cor = ["azul", "verde", "marrom", "Preto"];

console.log(fruta.length);
console.log(cor.length);



/******************************************************** */
// 03 - Crie um Objeto (onibus)
//Com a propriedade: rodas:8 - LimiteDePassageiros:40 - portas:2
//Imptima todas as propiedade no console;

let onibus = {
    rodas:8,
    limitedePassageiros:40,
    portas:2
}
console.log(onibus);
console.log(onibus.rodas);
console.log(onibus.limitedePassageiros);
console.log(onibus.portas);

/******************************************************** */
// 04 - incluir a propriedade janelas no onibus, 20 janelas
//Dele as rodas
//Imprima janelas no console.
delete onibus.rodas;
console.log(onibus.portas);

onibus.janelas = 20;
console.log(onibus);
console.log(onibus.janelas);


/******************************************************** */
// 05 - Crie um array com 5 nomes, incluindo oo seu.
//Verifique se seu nome existe no array
//Se existei imprima a mensagem no console.

let nomes = ["Carlos", "Luma", "Pietro", "Cicera", "Luisa",];
    
    if(nomes.includes("Jose")) {
        console.log("Nome encontrado");
    } else {
        console.log("Nome não encontrado");
    }

/******************************************************** */
// 06 - Crie um array com mais de 5 elementos.E outro com menos
// Se possuir menos de 5, imprima (Poucos elementos) no console 
// Se tiver mais, imprima ( muitos elementos); 
 
let nums = [1,2,3,4,5,6];
let nums2 = [1,2,3]

    function verificarElementosArray(arr) {
        if(arr.length >= 5) {
            console.log("Muitos elementos");

        }else {
            console.log("Poucos elementos")
        }
    }

   verificarElementosArray(nums);
   verificarElementosArray(nums2);


/******************************************************** */
// 07 - Crie um array com  5 elementos.
// Faça uma interação com ele e imprima no console;

let flores = ["Rosa", "Tulipa", "Gardênia", "Cravo", "Gerânio"];

    for(i = 0; i < flores.length; i++){
        console.log(flores[i]);
}

/******************************************************** */
// 08 - Crie um JSON com 3 propriedade (igual Obejto = {}) Porem usa-se aspas duplas ""
// Atribua a ele uma variavel;
// acesse as propriedades imprimindo no console.

let pessoa5 = {
    "nome": "Cicera",
    "idade": 35,
    "profissão": "Programadora",
}

console.log(pessoa5.nome);
console.log(pessoa5.profissão);
console.log(pessoa5.idade);

/******************************************************** */
// 09 - Crie um array a partir de uma frase;
// Imprima cada palavra no console por meio de um for;

const frase3 = "Maria Bonita dançarina";

const arrFrase3 = frase3.split(" ");
    for(let i = 0; i < arrFrase3.length; i++){
        console.log(arrFrase3[i]);
    }

/******************************************************** */
// 10 - Crie um objeto calculadora;
// Com os metudos, somar, subtrair, multiplicar e dividir.
// Cada método só deve aceitar dois parametros

const calculadora = {
    soma: function(a,b) {
        return a + b;
    },

    subtrair: function( a,b ) {
        return a - b;
    },

    multiplicar: function(a,b) {
        return a * b;
    },

    dividir: function(a,b) {
        return a / b;
    }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(8,4));
console.log(calculadora.multiplicar(3,4));
console.log(calculadora.dividir(12,4));



