let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let botao = document.getElementById('botao');
let res = document.getElementById('res');

const calcular = () => {
    if(peso.value.length == 0 || altura.value.length == 0 || peso.value <= 0 || altura.value <= 0){
        alert('Preenchimento Invalido, Certifique-se se esta correto');
        return
    }
    let resultado = peso.value / (altura.value * altura.value);
    res.innerHTML = (` Seu IMC é ${resultado.toFixed(2)}`)

}




botao.addEventListener('click', function (evento){
    evento.preventDefault();
    calcular();
});
