


const numeros = [5,50,35,1,7,48,65,21,20,15,9,20,37,40];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(acumulador, valor){
    return acumulador + valor
});

console.log(numerosPares)