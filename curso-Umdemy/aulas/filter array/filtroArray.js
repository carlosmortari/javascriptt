// Filter, Map, Reduce

// Retorne os numeros maiores que 10
// const numeros = [5,50,35,1,7,48,65,21,20,15,9,20,37,40];
// const numerosAcimaDeDez = numeros.filter(valor => valor > 10);


// function numerosMaiorQueDez(numero){
//     if(numero > 10){
//         return numero;
//     }
// }

// console.log(numerosAcimaDeDez);






//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Carlos', idade: 19},
    {nome:'Lucas', idade:25},
    {nome:'Roberta', idade:21},
    {nome:'João', idade:17},
    {nome:'Julia', idade:51},
    {nome:'Maria', idade:68}
];

const NomeTerminaA = pessoas.filter((fima) =>{
    return fima.nome.endsWith('a');   
    }
)


console.log(NomeTerminaA)


// const nome = 'dudu'
// console.log(nome[nome.length - 1])

// const maiorDe50 = pessoas.filter(num => num.idade > 50)
// console.log(maiorDe50)


// const pessoasComNomeGrande = pessoas.filter(function(obj){
//     if(obj.nome.length > 5){
//         return obj.nome
//     }
// })

// console.log(pessoasComNomeGrande);


