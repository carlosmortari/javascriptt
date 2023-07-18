let res = document.getElementById('res');
// Array com os nomes dos dias da semana em português
const nomesDiasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const nomeDosMeses= [ 'Julho'];

// Criar um novo objeto Date que representa a data e hora atual
const dataAtual = new Date();

// Extrair o nome do dia da semana usando o método getDay()
const diaSemana = nomesDiasSemana[dataAtual.getDay()];
const nomeDoMes= nomeDosMeses[dataAtual.getDay()];

// Extrair os componentes da data (dia, mês e ano)
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1; // Os meses em JavaScript são baseados em zero, então adicionamos 1.
const ano = dataAtual.getFullYear();

// Formatando a data como uma string no formato desejado (Exemplo: Segunda-feira, 15/07/2023)
const dataFormatada = `${diaSemana}, ${dia} de ${nomeDoMes} de ${ano}`;
res.innerHTML = dataFormatada
// Exibir a data formatada
console.log(dataFormatada);






