function criaPessoa(nome, sobrenome, a , p){
    return {
        nome, 
        sobrenome,
        fala:function(assunto){
            return `${nome} esta falando ${assunto}`;
        },
        altura : a,
        peso: p,
        //Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Carlos', 'Eduardo', 1.68, 60);
console.log(p1.imc);
console.log(p1.fala('Sobre Java Script'));