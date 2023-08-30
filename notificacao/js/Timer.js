import { View } from "./View.js"
import { Emiter } from "./Emiter.js"


const Timer = {
    time: 0.1 * 60,
    currentTime: 0,
    interval: null,

    timeToMinutos: time => Math.floor(time/60),
    timeToSegundos: time => time % 60,

    formatTime: time => String(time).padStart(2 ,'0'),

    init(time){
        Emiter.emit('countdown-start')
        Timer.time = time || 10  * 60
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000) 
  }, 

  countdown() {
    Timer.currentTime = Timer.currentTime -1
    
    const minutos = Timer.formatTime(Timer.timeToMinutos(Timer.currentTime));
    const segundos = Timer.formatTime(Timer.timeToSegundos(Timer.currentTime))

    View.render({
      minutos: minutos,
      segundos:segundos
    })

    if(Timer.currentTime === 0) {
        clearInterval(Timer.interval);
        Emiter.emit('countdown-end')
        return;
    }
  }
}

export {Timer}