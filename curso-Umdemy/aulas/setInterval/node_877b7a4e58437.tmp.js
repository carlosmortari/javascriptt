function mostraHora(){
    let data = new Date();

    return data.toLocaleDateString('pt-BR',{
        hour12: false
    });
}

function funcaoInterval() {
    console.log(mostraHora());
}

setInterval(funcaoInterval);