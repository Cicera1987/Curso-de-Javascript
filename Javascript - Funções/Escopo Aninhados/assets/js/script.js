//Escopos aninhados (escopo dentro de escopo)
// retorna sempre o global primeiro e depois decrescente assim sucessivamente

let a = 10; //escopo global

function multiplicar(x, y) { //escopo da função
    let a = x * y;


    if (a > 10){  //escopo do if
        let a = 0; a++;

        console.log(a); // retorna if
    }

    console.log(a); // retorna multiplicação

}

console.log(a); // retorna Global

multiplicar(3,7);



