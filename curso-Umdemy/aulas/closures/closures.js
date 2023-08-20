//Global
function retornaFuncao(nome){

    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Carlos');
const funcao2 = retornaFuncao('Roberto');
console.dir(funcao);
console.dir(funcao2);