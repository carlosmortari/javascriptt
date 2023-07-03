/*function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade, };
}

const pessoa1 =  criaPessoa ('Luiz', 'Oliveira', 25);
const pessoa2 =  criaPessoa ('Carlos', 'Eduardo', 19);
const pessoa3 =  criaPessoa ('Maria', 'Silva', 18);
const pessoa4 =  criaPessoa ('Roberto', 'Souza', 35);

console.log(pessoa1.nome, pessoa1.sobrenome); 

*/

const Pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Eduardo',
    idade: 19,

   fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementoIdade(){
        this.idade++;
    }
};

Pessoa1.fala();
Pessoa1.incrementoIdade();
Pessoa1.fala();
