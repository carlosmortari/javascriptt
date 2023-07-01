const canvasElement = document.querySelector("canvas"),
    canvasCtx = canvasElement.getContext("2d"),
    gapX = 10

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function(){
         // DESENHO DO CAMPO
        canvasCtx.fillStyle = "#286047";
        canvasCtx.fillRect(0, 0, this.w, this.h );
    },
}

const line = {
    w: 15,
    h: field.h,
    draw: function (){
         // DESENHO DA LINHA CENTRAL 
        canvasCtx.fillStyle = "#ffffff";
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h )

    },
}

const leftPaddle = {
    x: gapX,
    y:240,
    w: line.w,
    h: 200,
    draw: function (){
        // DESENHO DA RAQUETE ESQUERDA
        canvasCtx.fillStyle = "#ffffff";
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
    },
}

 const rigthPaddle = {
    x: field.w - line.w - gapX,
    y:240,
    w: line.w,
    h: 200,
    draw: function (){
        // DESENHO DA RAQUETE DIREITA
        canvasCtx.fillStyle = "#ffffff";
        canvasCtx.fillRect(this.x, this.y, this.w, this.h);
    },
}

const ball = {
    x: 120,
    y: 240,
    r: 20,
    draw: function (){
        // DESENHO DA BOLA REDONDA
        canvasCtx.fillStyle = "#ffffff";
        canvasCtx.beginPath( )
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        canvasCtx.fill()
    },
}

function setup () {
    canvasElement.width = canvasCtx.width = window.innerWidth
    canvasElement.height =  canvasCtx.height = window.innerHeight
}

function draw(){
    field.draw();
    line.draw();

    leftPaddle.draw();
    rigthPaddle.draw();

    ball.draw();
     
}

setup();
draw();