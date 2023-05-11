
function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var input = document.getElementById('ano')
    var res = document.querySelector('div#res')
    

    if (input.value.length == 0 ||Number(input.value) > ano){
        window.alert('[ERROR] Verifique os Dados e tente novamente !!')
    }else{
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - Number(input.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/criança.jpg')
            }else if (idade >=10 && idade < 30){
                //jovem
                img.setAttribute('src', 'img/homem.jpg')
            }else if (idade >=60){
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
                
      }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'img/meni.jpg')
        }else if (idade >=10 && idade < 30){
            //jovem
            img.setAttribute('src', 'img/menina.jpg')
        }else if (idade >=60){
            //idoso
            img.setAttribute('src', 'img/idosa.jpg')
        }
      }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
    }

}