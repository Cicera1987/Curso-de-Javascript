
const elementos = [
    {tag: 'p', texto: 'frase 01.'},
    {tag: 'div', texto: 'frase 02.'},
    {tag: 'section', texto: 'frase 03.'},
    {tag: 'footer', texto: 'frase 04.'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
