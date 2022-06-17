//Funções Anonimas ficam dentro de parenteses
// IIFE Immediately Invoked  Function expression.


(function (idade, peso, altura){

  const sobrenome = 'Ribeiro';
  function criaNome(nome){
    return nome + ' ' + sobrenome;

  }

  function falaNome() {
    console.log(criaNome('Cicera'));
  }
  falaNome();
  console.log(idade, peso, altura);


})(35, 66, 1.62);