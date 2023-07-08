/*const ttresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data =  new Date(0 + ttresHoras + umDia);
console.log(data.toString()); */

const data = new Date(1688814271572); // a, m, d, h, M, s, ms
console.log("Dia", data.getDate());
console.log("Mes", data.getMonth()+ 1 ); // mês começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia Semana", data.getDay()); // 0 - Domingo , 6 - sabado
console.log(data.toString());
//console.log(Date.now());
