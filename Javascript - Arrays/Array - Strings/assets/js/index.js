//Metudos de String 

//String Trim - Remove tudo que não é string;

let  frase = "    Matheus?";
let fraseCorrigida = frase.trim();

console.log(frase)
console.log(fraseCorrigida);

/******************************************************** */
//String PadStart - inseri caracteres antes de uma string

let codigoBarra = "801"; // Padrão dos codigos é 6 ou mais digitos
console.log(codigoBarra.padStart(6, "0"));// adiciona mais zeros até completar o padrão



/******************************************************** */
// String split - Divide um string por separador, e retorna um array

let frase1 = "testando o método split";
console.log(frase1.split(" "));

let palavras = frase1.split(" ");
console.log(palavras);

let produtos = "frios;frutas;carnes;massas;pães"
console.log(produtos.split(";"));

/******************************************************** */
//String Join - une as strins por separados

let frase2 = "Testando o método split";

let palavras2 = frase2.split(" ");

let novaFrase = palavras2.join("*");
console.log(novaFrase);

/******************************************************** */
//String repeat - repete as string de acordo com o parametro number

let texto = "Repetir ";
console.log(texto.repeat(5));