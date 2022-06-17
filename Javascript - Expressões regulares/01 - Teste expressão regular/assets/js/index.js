// Regex text - padrão 01 ('string')

const reg1 = new RegExp('bola'); // minha string (bola)

console.log(reg1.test("Tem bola")); // Procurando a string bola - true
console.log(reg1.test("Não tem")); // aqui será false pois não digitei a palavra bola



/************************************************************* */
// Regex text - padrão 02 /string/

const reg2 = /bola/;

console.log(reg1.test("Tem bola")); // Procurando a string bola - true
console.log(reg1.test("Não tem")); // aqui será false pois não digitei a palavra bola



/************************************************************* */
// Regex text - padrão 03 /string/

let text = 'Tem bola na cesta';

console.log(reg1.test("Tem bola")); // Procurando a string bola - true
console.log(reg1.test("Não tem")); // aqui será false pois não digitei a palavra bola
console.log(reg2.test(text));// Procurando a string bola - true

/************************************************************* */
// Regex text - padrão 04 /string/

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("2255222445quadrado999665852")); // mesmo misturado, ele encontra a string solicitada


