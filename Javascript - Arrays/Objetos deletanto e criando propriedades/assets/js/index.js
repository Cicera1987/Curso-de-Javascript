//Objeto: Deletando e criando propriedades.
// Podemos adicionar ou criar propriedades dentro do nosso código.

let pessoa = {
    nome: "Cicera",
    idade: 35,
    profissao:"Programadora",

}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

delete pessoa.idade;// Deletando propriedade (idade)
console.log(pessoa.idade);

console.log(pessoa.nome);
console.log(pessoa.idade);// propriedade deletada(idade)
console.log(pessoa.profissao);

pessoa.idade = false;

console.log(pessoa.nome);
console.log(pessoa.idade); // dando nova propriedade a idade
console.log(pessoa.profissao);





