function escopo (){
    const form = document.querySelector('#formulario');
    const res = document.getElementById('res');

    let pessoas = [];


    function recebeEventoForm (evento) {
        evento.preventDefault();
        let inputs = document.querySelectorAll('input');
        let nome = form.querySelector("#nome").value;
        let sobrenome = form.querySelector("#sobrenome").value;
        let peso = form.querySelector("#peso").value;
        let altura = form.querySelector("#altura").value;

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso:peso,
            altura: altura,
        })

        inputs.forEach((input) => {
            input.value = ''
        }) 
        console.log(pessoas);
        res.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);
}

escopo();
