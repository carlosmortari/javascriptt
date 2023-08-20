
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: true,//Configurado ou não
        get: function (){
            return estoque;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);  