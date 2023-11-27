function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
          if(typeof msg !== 'string') {
             reject ('Valor Ruim')
            return;
        }
          resolve(msg.toUpperCase() + ' - Passei na Promise');
          return;
        }, tempo);
    });
}

// esperaAi('Frase 1', rand(0,3))
//     .then(valor => {
//       console.log(valor);
//       return esperaAi('Frase 2', rand(0,3));
//     })
//      .then(frase =>{
//         console.log(frase);
//         return esperaAi('Frase 3', rand(0,3));
//      })   
//      .then(frase =>{
//        console.log(frase);
//      })
//      .catch(e => console.log(e));.


async function executa() {
    try {
        const frase1 = await esperaAi('Frase 1', rand(0,3));
        console.log(frase1);

        const frase2 = await esperaAi('Frase 2', rand(0,4));
        console.log(frase2);

        const frase3 = await esperaAi('Frase 3', rand(0,2));
        console.log(frase3);

        console.log('Terminamos na frase:', frase3);
    }catch(e) {
        console.log(e);
    }
}

executa()