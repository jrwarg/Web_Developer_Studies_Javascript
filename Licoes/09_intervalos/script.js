// TIMERS
// setInterval executa a função x de acordo com o segundo parâmetro em milisegundos)

/* let timer; // criada fora da função para ser reutilizada na outra função

function comecar(){
    timer = setInterval(showTime, 1000);

}

function parar(){
    clearInterval(timer);
}


function showTime(){
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}
 */

// SETTIMEOUT -> setTimeout -> espera o tempo e roda a função
let timer;
function comecar(){
    timer = setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Rodou!!'
    }, 2000)// espera dois segundos e roda
}
// parar ANTES Do tempo de execução do setTimeout
// temos que criar um timer
function parar(){
    clearTimeout(timer);
}


