//Declaração de função (function hoisting)
function falaOi(){
    console.log('Oie..');
}
falaOi();

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado  = function(){
    console.log('sou um Dado')
};

function executaFuncao(funcao){
    funcao()
}
executaFuncao(souUmDado);


//Arrow function
const arrow = () => {
    console.log('Sou uma Arrow Function');
}

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando....');
    }
};
obj.falar();
