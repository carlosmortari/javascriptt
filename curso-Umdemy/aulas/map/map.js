//Dobre os numeros

// const numeros = [5,50,35,1,7,48,65,21,20,15,9,20,37,40];
// const dobrarNum = numeros.map(function(valor){
//     return (valor * 2)
  
// })

// console.log(dobrarNum);


const pessoas = [
    {nome: 'Carlos', idade: 19},
    {nome:'Lucas', idade:25},
    {nome:'Roberta', idade:21},
    {nome:'João', idade:17},
    {nome:'Julia', idade:51},
    {nome:'Maria', idade:68}
];

const comIds = pessoas.map(function(obj, indice){
     const newObj = {...obj};
     newObj.id = indice
     return newObj;
})

console.log(comIds)

// const umaString = pessoas.map(function(string){
//     return string.nome
// })

// const idades = pessoas.map(function(obj){
//     delete obj.nome
//     return obj
// })

// console.log(idades)
