// Mais sobre escopo

let x = 7; // Escopo global

if(x> 5) { // Escopo da função if
    let x = 20; x++;
    console.log(x); // Escopo da função if vem primeiro
}

console.log(x); // Escopo global 