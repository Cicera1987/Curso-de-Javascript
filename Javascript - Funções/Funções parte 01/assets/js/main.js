//Declarando função.

falaOi();  
function falaOi() {
  console.log('Oie');

}

const souUmDado = function() {
  console.log('Sou um dado');
};
souUmDado();

// argumentos que sustenta todos os argumentos enviados

function funcao(){
  let total = 0;
  for (let argumento of arguments){
    total += argumento;
  }

  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7)


