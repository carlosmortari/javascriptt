export function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR' , {
            hour12: false,
            timeZone:'UTC'
        });
}

