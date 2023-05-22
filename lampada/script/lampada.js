let on = document.getElementById('on')
let off = document.getElementById('off')
let lamp = document.getElementById('lamp')

    function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

     function lampOn(){
        if (!isLampBroken()) {
            lamp.src = 'img/ligada.jpg'
        }
     }

     function lampOff(){
             if (!isLampBroken()) {
                 lamp.src = 'img/desligada.jpg'
             }
          }

     function lampBroken() {
        lamp.src = 'img/quebrada.jpg'
     }   

     on.addEventListener ( 'click', lampOn );
    off.addEventListener ( 'click', lampOff );
     lamp.addEventListener ( 'mousemove', lampOn );
     lamp.addEventListener ( 'mouseout', lampOff );
     lamp.addEventListener ( 'dblclick', lampBroken );
