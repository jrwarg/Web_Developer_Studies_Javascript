// let d = new Date('2022-01-01 15:53:17');
// pode receber 7 parâmetros(ano, mês(inicia no 0), dia, horas, minutos, segundos)

// console.log(d.toDateString()); // Wed Oct 19 2022
// console.log( d.toUTCString()); // Wed, 19 Oct 2022 20:11:18 GMT
// console.log( d.toDateString()); // Wed Oct 19 2022

let d = new Date();

let novoValor = d.getFullYear(); // 2022
novoValor = d.getMonth(); // 9 = Outubro
novoValor = d.getDay(); // 3 = quarta-feira (retorna dia da semana! não o dia)
novoValor = d.getDate(); // pega o dia
novoValor = d.getHours();
novoValor = d.getMinutes();
novoValor = d.getSeconds();
novoValor = d.getMilliseconds();
novoValor = d.getTime(); // miliseconds de 1970 até a hora atual = 1.666.211.413.961
novoValor = Date.now(); // TimeStamp = d.getTime();

// Alterar as datas:
novoValor = d;
d.setFullYear(2022);
d.setMonth(9);
// aumentar dias a partir de hoje:
d.setDate(d.getDate()+ 5);
d.setHours(d.getHours() +024)


console.log(novoValor)