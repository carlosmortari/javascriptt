//Retorno 
//Retorna um valor
//termina a funçao

/*function criaPessoa(nome, sobrenome){
    return { nome, sobrenome };
}

const p1 = criaPessoa('Carlos', 'Eduardo');
const p2 = {
    nome:'João',
    sobrenome:'Junior'
};

console.log(p1);
console.log(p2);*/

/*function falaFrase(comeco) {
    function falaResto(resto){
         return comeco + ' ' + resto;
    }    
    return falaResto; 
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo')); */

function criaMultiplicador(multiplicador){
    //multiplicador
    function multiplicacao(n){
        return n * multiplicador;
    }
    return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));