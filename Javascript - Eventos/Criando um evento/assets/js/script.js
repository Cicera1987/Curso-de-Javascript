
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector("a");


function msg(e){
    console.log("Clique no Button");
    e.stopPropagation();
}

//removendo um evento
btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event);
     
});

/************************************************** */
// propragation

p.addEventListener("click", function(){
    console.log("Clicou no paragrafo");
});


/************************************************** */
// Default

a.addEventListener("click", function(e) {
    e.preventDefault();
});

console.log("Não vai mudar de link")

