/**OPERADORES DE COMPARAÇÃO
 * 
 * Tambem conhecidos xomo Operadores relacopnais
 * Servem para formar as expreções condicionais para o comando if.
 * 
 * Operadores
 * 
 * Igual(==) - Verifica se os valores comparados são iguais.
 * Idêntico (===) - Verifica se os valores comparados são iguais e do mesmo tipo.
 * Diferente (!=) - Verifica se os valores comparados são difeerentes.
 * Não idênticos (!==) - Verifica se os valores são diferentes e tipos diferentes.
 * Menor (<) - Verifica se o valor da esquerda é menor que o valor da direita.
 * Maior (>) - Verifica se o valor da esquerda é maior que o valor da direita.
 * Menor igual (<) - Verifica se o valor da esquerda é menor ou igual que o valor da direita.
 * Maior igual (>) - Verifica se o valor da esquerda é maior ou igual que o valor da direita
 */

/**Operadores Logicos
 * O que são operadores lógicos?
 * 
 * Operadores
 * 
 * E (&&) - Verdadeiro se todas as expressões fprem verdadeiras.
 * OU (II) - Verdadeiro se pelo menos uma das expressões for verdadeira.
 * Negação (!) - Inverte o resultado da expressão de comparação.
 */


/**If e else condicionais */

//resultado verdeireiro, pois todos são verdadeiros
// true e True = true - Teste 01 --->
if (2==2 && 3 >= 1 ) {
    document.write('Verdadeiro')
    
}
document.write('<br/>','<br/>')


// resultado falso, pois temos um resultado falso
//true e True  && false = false - Teste 02 --->
if (2==2 && 3 >= 1 && 'a' =='b') {
    document.write('Verdadeiro')
    
} else{
    document.write('falso')
}
document.write('<br/>','<br/>')



//resultado falso, pois todos são falso
//false || false  || false = false - Teste 03 --->
if (4==2 || 3 >= 5 || 'a' =='b') {
    document.write('Verdadeiro')
    
} else{
    document.write('falso')
}
document.write('<br/>','<br/>')


// resultado verdadeiro, pois temos um resultado verdadeiro
//false || true  || false = true - - Teste 04 --->
if (4==2 || 7 >= 5 || 'a' =='b') {
    document.write('Verdadeiro')
    
} else{
    document.write('falso')
}
document.write('<br/>','<br/>')


// Inversão de resultados - O resultado é verdadeiro, porem o ele inverte para falso.
//true = false - - Teste 05 --->
if(!(5>=2)) {
    document.write('Verdadeiro')
    
} else{
    document.write('falso')
}
document.write('<br/>','<br/>')

//Refazendo o calculo da nota do Aluno - Operador lógico

/*var nota = prompt('Infome a nota do aluno')
var faltas = prompt('Informe o número de faltas do aluno')
var media = 7
var faltasMaxima = 15

if (nota >= media && faltas <= faltasMaxima) {
    document.write('Aprovado')

}else{
    document.write('Reprovado')
}
*/

document.write('<br/>','<br/>' ,'<br/>')

//Operador ternário

var nota = prompt('Infome a nota do aluno')
var faltas = prompt('Informe o número de faltas do aluno')
var media = 7
var faltasMaxima = 15

var resultado = (nota >= media && faltas <= faltasMaxima) ? 'Aprovado' : 'Reprovado'
document.write(resultado)
