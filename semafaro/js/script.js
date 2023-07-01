const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 2;

const trafficLight = (event) => {
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2){
        colorIndex++
    }else {
        colorIndex = 0;
    }
}

const changecolor = () => {
    const cores = ['green' ,'yellow','red' ];
    const color = cores[colorIndex];
    turnOn[color]();
    nextIndex();
}
const turnOn = {
    'red':    () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => setInterval(changecolor, 5000)
}

buttons.addEventListener('click', trafficLight);