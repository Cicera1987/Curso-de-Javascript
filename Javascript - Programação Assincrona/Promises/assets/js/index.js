//programação Assincrona

// função Promises

let p = Promise.resolve(5);

console.log("Outros Códigos");
console.log(p);

p.then((value) => {console.log(`O valor é ${value}`)});
p.then((value) => { return value + 5})
.then((value) => {console.log(value )});


/***************************************************** */
//Falhas do Promises - tratandoo erros

let prom = Promise.resolve(new Error("Não deu certo"));

console.log("lalala")

prom.then(value => console.log(value))
.catch(reason => console.log("Falhou " + reason));



/***************************************************** */
// Reitando promessas (promises)

function verificarNumero(num){
    return new Promise((resolve,reject) => {
        if(num ==2){
            resolve(console.log(`O numero é ${num}`));
        } else {
            reject(new Error("Falhou"));
        }
    });
}

verificarNumero(2);
verificarNumero(3);



/***************************************************** */
// Resolvendo várias Promises

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(15);
    }, 5000);
});

const p2 = Promise.resolve(10);

const p3 = new Promise((resolve, reject) => {
    resolve(12);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));