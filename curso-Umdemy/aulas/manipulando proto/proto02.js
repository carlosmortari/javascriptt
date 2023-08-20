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

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    altura: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 84
    },
});
p3.aumento(15)
console.log(p3)

// const p3 = Object.create(Produto.prototype);
// p3.preco = 69;
// p3.aumento(15)
// console.log(p3)