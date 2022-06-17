
var opcao = 2

switch (opcao) {
    case 1:
        document.write('Opção 1')
        break

    case 2:
        document.write('Opção 2')
        break

    default:
            document.write('Não há opções')
}

document.write('<hr/>')

var opcao = prompt('Digite um número')

switch (parseInt(opcao)) {
    case 1:
        document.write('Opção 1')
        break

    case 2:
        document.write('Opção 2')
        break

    default:
            document.write('Não há opções')
}
