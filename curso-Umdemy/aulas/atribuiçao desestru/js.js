//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
/*const numeros =  [ [1, 2 ,3] ,[4 ,5 ,6] ,[7 ,8 ,9] ];

console.log(numeros[1][2]);
*/

const pessoa = {
    nome:'Dudu',
    sobrenome:'Mortari',
    idade:19,
    endereco: {
        rua:'Av Brasil',
        numero:320
    }
};

//atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome);
