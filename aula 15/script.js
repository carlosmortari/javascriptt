function verificar(){
    var num = document.getElementById('valor')
    var res = document.getElementById('res')
    
    var num1 = parseInt(num.value)
    if(num1%2 == 0){
        res.innerHTML = `O número ${num1} é par`
    }else{
        res.innerHTML = `O número ${num1} é ímpar`
    }
}

