/*
Primitivos (Imutaveis)- string, number, boolean, null, undefined (bigint, symbol) 
- Valores copiados

Referência (Mutavel) - Arrays, Object, function - (passados por referência)
*/ 

/*let a = 'A';
let b = a; //Cópia
console.log(a, b);
*/

/*let a = [1,2,3,4];
let b = [...a];
console.log(a,b);

a.push(4);
console.log(a, b);

a.pop();
console.log(a,b); */

const a = {
    nome: 'Carlos',
    sobrenome: 'Eduardo',
};

const b = {...a};

a.nome = 'João';
console.log(a);