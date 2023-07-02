let num = Number(prompt('Digite um Número:'));
const raizQuadrada = Math.round(Math.sqrt(num));
const numInteiro = Number.isInteger(num);
document.body.innerHTML =`
        <p>Seu número é ${num}</p>
        <p>Raiz quadrada:${raizQuadrada} </p>
        <p>${num} é Inteiro:${numInteiro} </p>
        <p>é NaN: </p>
        <p>Arredondando para baixo: ${Math.floor(num)} </p>
        <p>Aredondando para cima: ${Math.round(num)}</p>
        <p>Com duas casas decimas: ${num.toFixed(2)}</p>`;

