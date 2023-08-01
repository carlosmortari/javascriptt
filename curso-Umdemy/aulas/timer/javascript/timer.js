function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR' , {
            hour12: false,
            timeZone:'UTC'
        });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

document.addEventListener('click' , function(e){
    const element = e.target
    
    if(element.classList.contains('zerar')) {
        clearInterval(timer);
        segundos = 0
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00';
    }

    if(element.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }

    if(element.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado')
    }

})

