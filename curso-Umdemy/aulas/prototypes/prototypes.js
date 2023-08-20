// Construtora => molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

// pessoa1 -> Pessoa.Prototype -> Object.Prototype

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
};

Pessoa.prototype.dizOla = function (){
    return 'Ola pessoal'
}

//Instancia
const pessoa1 = new Pessoa('Carlos', 'M.'); // <- Pessoa = função construtora
const pessoa2 = new Pessoa('Roberta', 'S.');
const data = new Date(); // <- Pessoa = função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);