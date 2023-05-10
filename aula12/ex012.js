var agora = new Date()
var hora = agora.getHours()
    if (hora >=5 && hora <=12){
        console.log(`Bom Dia, Agora são exatamente ${hora} horas`)
    }else if(hora >= 12 && hora <= 18){
        console.log(`Boa Tarde, Agora são exatamente ${hora} horas`)
    }else if(hora >= 19){
        console.log(`Boa Noite, agora são exatamente ${hora} Horas`)
    }else if(hora >= 00 && hora <=5){
        console.log(`Boa Madrugada`)
    }