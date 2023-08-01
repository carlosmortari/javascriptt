let conteiner = document.querySelector('.conteiner')

const elementos = [
    {tag: 'p' , texto:'Qualquer texto que voce queira'},
    {tag: 'div' , texto: 'Segunda frase'},
    {tag:'section', texto:'Terceira frase'},
    {tag: 'footer', texto: 'Quarta frase'}
];

const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++){
    console.log(elementos[i])
    let {tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada)
    
}

conteiner.appendChild(div)