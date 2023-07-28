import {Modal} from './modal.js'
import {alertError} from "./alert-error.js"
import {IMC, naoNumero} from "./utils.js"

const form = document.querySelector('form');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

inputPeso.oninput = () => alertError.close()
inputAltura.oninput = () => alertError.close()

form.onsubmit =  event => {
    event.preventDefault()

    const peso = inputPeso.value 
    const altura = inputAltura.value
    
    const errorAlert = naoNumero(peso) || naoNumero(altura)

    if(errorAlert) {
        alertError.open()
        return
    }

    alertError.close()


   const result = IMC(peso, altura);
   const message = `Seu IMC é de ${result}`
   
   Modal.message.innerText = message
   Modal.open()
}





