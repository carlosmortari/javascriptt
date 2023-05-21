
var valores = []
function adicionar() {
    var inpu = document.getElementById('num').value
    var res = document.getElementById('res')
    var lista = document.getElementById('flista')
    
    var num = Number(inpu)


    if (num == 0 || num > 100) {
        window.alert('[ERRO] Digite um número entre 1 e 100')
    } else {
        valores.push(num)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)  
}

}

function finalizar() {
     if (valores.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar')
     }else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A media Entre os valores, São ${media}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
     }
    
}