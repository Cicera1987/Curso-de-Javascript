// conjuntos


const reg1 = /[12345]/;

console.log(reg1.test("temos o numero 6?"));
console.log(reg1.test("temos o numero 2?"));

/*********************************************** */
//Maneira mais correta de verificar se há um numero em uma frase
const reg2 = /[0-9]/;

console.log(reg1.test("temos o numero 6?"));
console.log(reg1.test("temos o numero 2?"));


/*********************************************** */
//CAracteres especiais

// 01: \d - Aceita qualquer digito de caracter
// 02: \w - Aceita um caractere alfanumerico ("teste")
// 03: \s - Aceita qualquer caractere de espaço em branco
// 04: \D - Aceita caracteres que não são digitos
// 05: \W - Aceita caracteres não-alfanumericos
// 06: \S - Aceita que não seja espaço em branco 
// 07:  . - Aceita qualquer caractere, menos nova linha



