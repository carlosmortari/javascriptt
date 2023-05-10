var idade = 66
    console.log(`Voce tem ${idade} anos`)
    if (idade >= 18 && idade < 65){
        console.log('Voto Obrigatorio')
    }else {
        if (idade >= 16 && idade < 18 || idade > 65){
            console.log('Voto Opcional')
        }else {
            console.log('Não Vota')
        }
    }
