const pessoas = [
    {id: 3, nome: 'Carlos'},
    {id: 2, nome: 'Julia'},
    {id: 1, nome: 'Helena'}
];


const novasPessoas = new Map()
for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
};

console.log(novasPessoas)

// const novasPessoas = {};
// for(const {id, nome} of pessoas) {
//     console.log(id, nome)
// }