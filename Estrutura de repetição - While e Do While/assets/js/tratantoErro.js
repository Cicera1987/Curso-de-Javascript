// Tratando Erros - Try e cath e fanally

function soma ( x, y ) {
   if(typeof x !== 'number' || 
   typeof y !== 'number'
) {
   throw new Error('x e y precisam se números');
}

   return x + y;
}

try{ //Executada quando não há erros
   console.log(soma (1,3));
   console.log(soma ('1', 6));
} catch (error) { //Executada quando há erros
   //console.log(error);
   console.log('Os digitos precisam ser numericos');

} finally{ // Ele é excutado sempre
   console.log('FINALLY: sempre é executado')

}

function retornaHora(data){
   if(data && ! ( data instanceof Date) ) {
      throw new TypeError('Esperando instância de Date.');
   }

   if (!data) {
      data = new Date();
   }

   return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute:'2-digit',
      second: '2-digit',
      hour12: false
   })
}
const data = new Date ();
const hora = retornaHora();
console.log(data)
console.log(hora);
