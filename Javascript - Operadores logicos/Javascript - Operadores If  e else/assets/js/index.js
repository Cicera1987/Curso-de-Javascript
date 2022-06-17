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


if (7 == 7) {
    document.write('Entrou no bloco if (verdadeiro)')
} else{
    document.write('Entrou dentro do bloco else (falso)')
}
document.write('<hr />')

if (7 == 'sete') {
    document.write('Entrou no bloco if (verdadeiro)')
} else{
    document.write('Entrou dentro do bloco else (falso)')
}

/**Calculando a media de uma aluno.
 * Usando Operadores de >= ou <=.
 */

document.write('<hr />')

var notaAluno = prompt('Digite a nota do Aluno') //O prompt reprenta uma string e o javascrip intepreta para uma string que representa um numero.
var media = 7

if (notaAluno >= media) {
        document.write('(Aprovado) Parabéns você foi aprovado')
} else{
   document.write('(Reprovado) Tente novamente. Nota abaixo da média')

}
document.write('<hr />')
/**Casting de tipos com toString() - parseInt() e parseFloat.
 * 
 * Praticando  Operadores aritiméticos
 */

var variavel1 = prompt('Digite um valor')
var variavel2 = prompt('Digite outro valor')
    
document.write(variavel1 + variavel2, '(Aqui ele concatena os números)' )// Aqui ele concatena - são soma, pois são string


document.write('<hr />')



//Fazendo soma

var variavel3 = prompt('Digite um valor')
var variavel4 = prompt('Digite outro valor')

variavel3 = parseInt(variavel3) // temos tambem o parseFloat - com fração
variavel4 = parseInt(variavel4) // temos tambem o parseFloat - com fração
    
document.write(variavel3 + variavel4, '(Aqui ele soma os números)')

document.write('<hr />')

var variavel5 = 10
var variavel6 = 20

console.log(variavel5)
console.log(variavel6)

document.write(variavel5.toString() + variavel6.toString())



