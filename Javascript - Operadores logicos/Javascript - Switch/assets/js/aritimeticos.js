/*
var num1 = prompt('Digite o valor de  num1')
var num2 = prompt('Digite o valor de  num2')

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write('A soma entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 + num2) + '<br/>' )
document.write('A Subtração entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 - num2) + '<br/>' )
document.write('A divisão entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 / num2) + '<br/>' )
document.write('A Multiplicação entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 * num2) + '<br/>' )
document.write('O módulo ou resto da divisão entre ' + num1 + ' e ' + num2 + ' é: ' + (num1 % num2) + '<br/>' )
document.write('O incremento de  ' + num1 + ' é: ' + (num1++) + '<br/>' )
document.write((num1) + '<br/>'  )
document.write('O incremento de  ' + num1 + ' é: ' + (num1--) + '<br/>' )
document.write(num1)
*/
/*
var teste = 10

//teste = teste +5 
//teste +=5
//teste -=5
//teste *=5
//teste /=2
teste %=3

document.write(teste)*/


var nome = prompt('Digite seu nome.')
var altura = prompt('Digite sua altura em centimetros')
var peso = prompt('Digite seu peso')
var classificacao = '';

altura = parseFloat(altura / 100)
peso = parseFloat(peso)
imc = (peso) / (altura *altura)


document.write('Olá ' + (nome) +'<br/>')
document.write('Altura de ' + (altura) + '<br/>')
document.write('Peso atual: ' + (peso) + '<br/>')


if(imc < 16){
    classificacao = ('Baixo peso, sutiação muito grave')

}else if(imc >= 16 && imc < 16.99 ){
    classificacao = ('Baixo peso, sutuação grave')

}else if(imc >= 17 && imc < 18.49 ){
    classificacao = ('Baixo peso')

}else if(imc >= 18.50 && imc < 24.99 ){
    classificacao = ('Peso normal')

}else if(imc >= 25 && imc < 29.99 ){
    classificacao = ('Sobrepeso')

}else if(imc >= 30 && imc < 34.99 ){
    classificacao = ('Grau de Obesidade I')

}else if(imc >= 35 && imc < 39.99 ){
    classificacao = ('Grau de Obesidade II')

}else{
    classificacao = ('Grau de Obesidade III')
}


document.write((nome) + ' seu índice de massa corporal é de : ' + (imc) + ' sendo classificado como ' +(classificacao)+ '<br/>')



