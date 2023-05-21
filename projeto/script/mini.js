function calcular(){
    let nome = document.getElementById('nome')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let res = document.getElementById('res')
   altura = Number(altura.value)
   peso = Number(peso.value)

   if(altura <=0 ||peso <=0){
    window.alert('Preencha todos os campos')
   }else {
    apelido = nome.value
    let imc = peso / (altura * altura)
    res.innerHTML = ` ${apelido} Seu IMC é de ${imc.toFixed(2)} <br>`
    if(imc < 18.5){
        res.innerHTML += `Você está abaixo do peso`
    }else{
        if(imc >18.5 && imc < 24.9){
            res.innerHTML += `Você está no peso ideal`
        }else{
            if(imc >=25 && imc < 29.9 ){
                res.innerHTML += `Você está com sobrepeso`
            }else{
                if(imc >=30 && imc <34.9){
                    res.innerHTML += `Você está com obesidade grau I`
                }else{
                    if(imc >=35 && imc <39.9){
                        res.innerHTML += `Você está com obesidade grau II`
                    }else{
                        if(imc > 40){
                            res.innerHTML += `Você está com obesidade grau III`
                        }
                    }
                }
            }
        }
    }
   } 

   /*
Menor que 18,5	Magreza
18,5 a 24,9	Normal
25 a 29,9	Sobrepeso
30 a 34,9	Obesidade grau I
35 a 39,9	Obesidade grau II
Maior que 40	Obesidade grau III */
   
}