// // new Object -> Object.Prototype
// const objA = {
//     chaveA: 'A'
//     //__proto__: Object.Prototype
// };

// // new Object -> Object.Prototype
// const objB = {
//     chaveB: 'B'
//     //__proto__: objA
// };


// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objC, objB);
// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA);
// console.log(objC.chaveB);


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

//p2.aumento(100)
p2.desconto(25)

console.log(p1);
console.log(p2);