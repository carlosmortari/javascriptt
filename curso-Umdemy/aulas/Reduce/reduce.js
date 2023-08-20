

// const numeros = [5,50,35,1,7,48,65,21,20,15,9,20,37,40];
// const total = numeros.reduce(function(acumulador, valor){
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);

// console.log(total)




const pessoas = [
    {nome: 'Carlos', idade: 19},
    {nome:'Lucas', idade:25},
    {nome:'Roberta', idade:21},
    {nome:'João', idade:17},
    {nome:'Julia', idade:51},
    {nome:'Maria', idade:68}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha)