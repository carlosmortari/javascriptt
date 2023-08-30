import { notificacao } from "./notificacao.js";
import { Timer } from "./Timer.js";
import { Emiter } from "./Emiter.js";

const app = {
    async start(){
       try {
        await notificacao.init()

        Emiter.on('countdown-start', () =>{
            notificacao.notify({
            titulo: 'Hora de Postar',
            body:'Crie algum conteudo referente a .....'
        })
        })

        Emiter.on('countdown-end', () => {
            Timer.init()
        })

        Timer.init(0.1 * 60)
        

       }catch(err){
        console.log(err.message)
       }
    }
};

export {app};