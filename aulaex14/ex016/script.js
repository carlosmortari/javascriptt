function contar(){ 
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    
    for(var contador = inicio; contador <= fim; contador = contador + passo ){ 
    res.innerHTML += `${contador}`
}
}
