// IIFE -> "Immediately Invoked Function Expression"
//são funções que são definidas e executadas imediatamente após sua criação.Elas são frequentemente usadas para criar um escopo isolado para variáveis e evitar poluição do escopo global.

(function (){
    let nome = 'Carlos';
    let sobrenome = 'Eduardo'
    console.log(`Prazer em te conhecer ${nome} ${sobrenome}`);
})();