// função construtora => objetos
// função fabrica => objetos
// construtora => Pessoa (new)

function Pessoa(nome , sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(`${this.nome}: Sou um Método`);
    }
}

const p1 = new Pessoa('Luiz', 'Silva');
const p2 = new Pessoa('Roberta', 'Oliveira');
p1.metodo();
console.log();