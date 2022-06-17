//Objeto: Mutação
// Se vc alterar a propriedade um objeto vc altera do outro 
// pois na mutação vc iguala ambos - refencia
// um ao anterior.

let pessoa = {
  nome: "Cicera"
}
let pessoa2 = pessoa;
console.log(pessoa == pessoa2);


pessoa2.nome = "Jose";
console.log(pessoa.nome);



pessoa.nome = "Ale";
console.log(pessoa2.nome);




