
// function Produto(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque' , {
//         enumerable: true, //Mostra a chave
//         value: estoque, //Valor
//         writable: false,// pode alterar ou não
//         configurable: true //Configurado ou não
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque' , {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor
        writable: false,// pode alterar ou não
        configurable: true //Configurado ou não
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true, //Mostra a chave
            value: nome, //Valor
            writable: true,// pode alterar ou não
            configurable: true //Configurado ou não
        },
        preco:{
            enumerable: true, //Mostra a chave
            value: preco, //Valor
            writable: true,// pode alterar ou não
            configurable: true //Configurado ou não
        },
        estoque: {}
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1){
    console.log(chave);
}