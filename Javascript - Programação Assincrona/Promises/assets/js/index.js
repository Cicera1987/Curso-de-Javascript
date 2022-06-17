//programação Assincrona

// função Promises

let p = Promise.resolve(5);

console.log("Outros Códigos");
console.log(p);

p.then((value) => {console.log(`O valor é ${value}`)});
p.then((value) => { return value + 5})
.then((value) => {console.log(value )});