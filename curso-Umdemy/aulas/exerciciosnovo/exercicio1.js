//escreva uma função que recebe 2 numeros e retorne o maior

/*let numeros = [10,15,85,64,458,685,120];

const maiorNumero = Math.max(...numeros);
console.log(maiorNumero)

const menorNumero = Math.min(...numeros);
console.log(menorNumero)*/


const ePaisagem = (largura, altura) => {
    if(largura > altura){
        return "Esta no modo Paisagem"
    }
        return "Esta no modo Retrato"
}

console.log(ePaisagem(1920, 1080));
