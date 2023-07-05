let personagens = document.querySelectorAll('.card');
let imagemPersonagem = document.getElementById('personagem-grande');
let nomePersonagem = document.getElementById('nome-personagem');
let descricaoPersonagem = document.getElementById('descricao-personagem');

let indice = 0

    const personagem1 = {
        src:'src/imagens/card-ciclope.png',
        nome: 'Ciclope',
        descricao: 'Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los',
    }

    const personagem2 = {
        src:'src/imagens/card-jean-grey.png',
        nome: 'Jean-Grey',
        descricao: 'descriçao da jean grey',
    }

    const personagem3 = {
        src:'src/imagens/card-lince-negra.png',
        nome: 'Lince-Negra',
        descricao: 'descriçao da lince negra',
    }

    const personagem4 = {
        src:'src/imagens/card-tempestade.png',
        nome: 'Tempestade',
        descricao: 'descriçao da tempestade',
    }

    const personagem5 = {
        src:'src/imagens/card-vampira.png',
        nome: 'Vampira',
        descricao: 'descriçao da vampira',
    }

    const personagem6 = {
        src:'src/imagens/card-wolverine.png',
        nome: 'Wolverine',
        descricao: 'descriçao do wolverine',
    }

    const personagem7 = {
        src:'src/imagens/card-noturno.png',
        nome: 'Noturno',
        descricao: 'descriçao do Noturno',
    }

    const personagem8 = {
        src:'src/imagens/card-magneto.png',
        nome: 'Magneto',
        descricao: 'descriçao do Magneto',
    }

   let arrayPersonagem = [
    personagem1,
    personagem2,
    personagem3,
    personagem4,
    personagem5,
    personagem6,
    personagem7,
    personagem8
]


const trocarPersonagem = (indice) =>{
    imagemPersonagem.src = arrayPersonagem[indice].src
    
    nomePersonagem.textContent = arrayPersonagem[indice].nome

    descricaoPersonagem.textContent = arrayPersonagem[indice].descricao
}


const pegarIndiceElemento = (evento) =>{
    let id = evento.currentTarget.id;
    indice = Number(id);
    trocarPersonagem(indice) 
}



personagens.forEach((card, index) => {
    card.id = index
    card.addEventListener('mouseenter',pegarIndiceElemento);
}) 

