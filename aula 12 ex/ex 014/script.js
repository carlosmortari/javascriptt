function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()



    if (hora >=0 && hora < 12){
        msg.innerHTML = `Bom Dia, Agora São ${hora} Horas da Manhã`
        img.src = 'img/foto-manha.png'

        document.body.style.background = '#94836f'
    }else if (hora >=12 && hora <= 18){
        msg.innerHTML = `Boa Tarde, Agora São ${hora} horas`
        img.src = 'img/foto-tarde.png'
        document.body.style.background ='#6d4310'
    }else {
        msg.innerHTML = `Boa Noite, Agora São ${hora} Horas da Noite`
        img.src = 'img/foto-noite.png'

        document.body.style.background = '#171720c9'
    }

    
}
