export function naoNumero(value) {
    return isNaN(value) || value === ""
}

export function IMC (peso, altura){
    return (peso / ((altura / 100)**2)).toFixed(2)
}