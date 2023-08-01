
/*
--try
//executa quando não ha erros
--catch
//é executada quando ha erros
*/

/*try {
    console.log(somarNumeros);
} catch (err){
    console.log("(somarNumeros) - Não Encontrada ");
}*/

function soma (x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números.');
    }

    return x + y
}
try{
    console.log(soma(5,3));
    console.log(soma('1', 4));
}catch(error){
    //troca o error por outro tipo de mensagem ou alerta
    console.log(error)
}