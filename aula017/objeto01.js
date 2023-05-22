let amigo = {nome:'Carlos', sexo:'M', peso: 65.4 , engordar(p=0){
    console.log(`Engordou ${p} Kg`)
    this.peso += p
}}

let antes = amigo.peso
amigo.engordar(2)
console.log(`${amigo.nome} pesava ${antes} e agora pesa ${amigo.peso} Kg`)