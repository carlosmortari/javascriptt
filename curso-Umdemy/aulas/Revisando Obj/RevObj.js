//

// const pessoa = {
//     nome:'Carlos',
//     sobrenome:'Eduardo',
//     idade:19,
//     carro: {
//         marca:'Honda',
//         modelo:'Civic',
//         cor:'Preto',
//         ano:2023
//     }
// };

// console.log(pessoa);

// const pessoa1 = new Object();
// pessoa1.nome = 'Carlos';
// pessoa1.sobrenome = 'Eduardo';
// pessoa1.idade = 19;

// pessoa1.falaNome = function(){
//     return (`${this.nome} está falando seu nome`);
// }
// pessoa1.getDataNascimento =function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for(let chave in pessoa1){
//     console.log(pessoa1[chave])
// }


// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Carlos', 'Eduardo');
// console.log(p1.nomeCompleto());


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this  -> this
const p2 = new Pessoa('Carlos', 'Eduardo');
console.log(p2)
