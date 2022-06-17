
// função pode se void
// função do tipo return

function calcularArea ( largura, comprimento ){

    //logica
    var area = largura * comprimento

    return area

}

largura = parseFloat(largura)
comprimento = parseFloat(comprimento)


var largura = prompt(' Informe a largura do terreno em metros')
var comprimento = prompt(' Informe o comprimento do terreno em metros')


var are = calcularArea(largura, comprimento)

document.write('O terreno possui ' + are + ' metros quadrados')

document.write('<br/>')


//Funções Anônimas

var exibirSaudacao = function (nome) {
    document.write(' Olá ' + nome + ', Tudo bem?')

}

exibirSaudacao('Maria')

