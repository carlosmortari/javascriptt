// (condiçao)? 'Valor Verdadeiro' : 'Valor para Falso
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario, corPadrao);

