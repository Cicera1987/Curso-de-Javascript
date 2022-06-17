// Função pode ou não pode dirigir


function podeDirigir(idade, cnh) {
    if(idade>= 18 && cnh == true) {
        console.log('Pode dirigir');

    } else {
        console.log('Não pode digirir')
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0));
console.log(podeDirigir(15, false));
console.log(podeDirigir(19, false));