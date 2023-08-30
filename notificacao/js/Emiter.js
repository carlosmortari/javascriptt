const Emiter = {
    events: {},

    on(event, cb){
        //Emiter.events.click
        Emiter.events[event] = Emiter.events[event]  || []
        Emiter.events[event].push(cb)
    },


    emit(event,...rest){
        if(event in Emiter.events === false) {
            return;
        }

        Emiter.events[event].forEach((e) => {
            e(...rest)
        })
            
        }
    }

export {Emiter}