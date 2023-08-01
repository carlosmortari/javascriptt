//escreva uma função que recebe um numero e retorne o seguinte::
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//Numero não e  divisivel por 3 e 5 = retorna o proprio numero
//checar se o numero é realmente um numero
//Use a função com numeros de 0 a 100

const num = 15

const divisivel = (num) => {
    if(num % 3===0 && num % 5===0){
        return "FizzBuzz"
    }
    if(num % 3 === 0){
        return "Fizz"
    }
    if(num % 5 ===0){
        return "Buzz"
    }
   
}

console.log(divisivel(num))