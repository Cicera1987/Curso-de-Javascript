//programação Assincrona

// Utilizando Await - Espera o processo de uma função dada
// ocorrer para depois ser utilizando. (Delay)

function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b);
        }, 4000);

    })
}

async function resSoma(a,b,c) {
    let x = somaComDelay(a,b);
    let y = c;

    return await x + y;
}

resSoma(2,4,6).then(value => console.log(value));


