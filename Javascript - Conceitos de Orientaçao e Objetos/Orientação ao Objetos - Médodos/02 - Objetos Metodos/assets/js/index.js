const cachorro ={
    raca:"Raça indefinida",
    uivar: function(){
        console.log("Auuuuuuuu");
    },
    rosnar: function () {
        console.log("grrrrrr");  
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);
cachorro.uivar();
cachorro.rosnar();

cachorro.setRaca("Pastor Alemão"); //modo set
console.log(cachorro.raca)

console.log(cachorro.getRaca()); // modo get

