const View = {
    render({minutos, segundos}){
        document.body.innerHTML = `
        <p>Proximo Post em</p>
        <span>${minutos}:${segundos}</span>
        `;
    }
}

export {View};