
const valor = document.querySelector('.cor');
const descricao = document.getElementById('descricao');
const form = document.getElementById('formulario')

/*Funcao Calculo IMC */ 

const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    return imc;
};

const valorIMC = (imc) =>{

    document.getElementById('imc').classList.remove('hide');
    if(imc < 18.5){
        descricao.innerText = 'Cuidado você está abaixo do peso !!'
    }

    if(imc > 18.5 && imc < 24.9){
        descricao.innerText = 'Você está com o peso normal'
    }

    if(imc > 24.9 && imc < 29.9){
        descricao.innerText = ' Você está sobre peso'
    }

    if(imc > 29.9 && imc < 34.9) {
        descricao.innerText = ' Você esta com Obesidade Grau 1'
    }

    if(imc > 34.9 && imc < 39.9){
        descricao.innerText = ' Você esta com Obesidade Grau 2'
    }

    if(imc > 39.9){
        descricao.innerText = ' Você esta com Obesidade Grau 3 (CUIDADO !!)'
    }
}


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    let imc = calcularIMC(peso, altura)
    valorIMC(imc); 

    if(peso === 0 || altura === 0){
        alert('Inválido')
        return; 
    }

    valor.innerText = imc.toFixed(2);
});





