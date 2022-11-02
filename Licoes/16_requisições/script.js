/* JSON = Javascript Object Notification
Objeto usado para enviar e receber requisições */

// '{"nome": "bonieky", "idade":90}' // no json nome da propriedade
// do elemento NÃO TEM aspas. o Parse corrije isso, e o transforma
// em JSON realmente

/* let pessoa = JSON.parse('{"nome": "bonieky", "idade":90}')

console.log(pessoa) */

// função Stringify:
// o contrário de PARSE -> transforma em string JSon

// console.log(JSON.stringify({nome: 'bonieky', idade: 90}))

// PARSE: TRANSF UMA STRING EM JSON
// STRINGIFY: TRANSF. UM JSON  EM STRING

// ========= SÍNCRONO E ASSÍNCRONO ==============//

/* // Síncrono
let nome = 'José';
let sobrenome = 'Guerra';
let completo = nome+' '+sobrenome;
   // execução ordenada uma após a outra

// Assíncrono
let nome = 'José';
let sobrenome = 'Guerra';
let temperatura = Maquininha.pegarTemperatura(); // assíncrona
let completo = nome+' '+sobrenome;
    // não há "interrupção" na execução do código assincrono
 */

// ========== CALLBACK ===============

// É uma função enviada para outra execução (geralmene assincrona)

/* function alertar(){
    alert("Opa, tudo bem?")
}

let nome = 'José';
setTimeout(alertar, 2000);
let sobrenome = 'Guerra'

console.log('Nome completo = ' + nome + ' '+ sobrenome); */

// ========== PROMISSE =================
/* 
function pegarTemperatura(){
    return new Promise(function(resolve, reject){ // resolve e reject são obrigatórios
        console.log('pegando temperatura...')

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    });
}


//  usando a Promise
console.log('Código antes: ')
let temp = pegarTemperatura();

console.log('Código durante: ')
temp
    .then(function(resultado){
    console.log('TEMPERATURA: ' + resultado)
});

temp.catch(function(error){
    console.log("Deu algum erro");
})

console.log('Código depois: ')
 */
// ========== FETCH ==================

// Fetch retorna uma promise
// assync / await = obriga o código a esperar o resultado do fetch

async function loadPosts(){
    document.getElementById('posts').innerHTML = 'Carregando... '
    // função com o await....
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);

 /*    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
           return montarBlog(json);
        })
        .catch(function(erro){
            document.getElementById('posts').innerHTML = 'OOpss.. algo deu errado...'
        }
) */};

function montarBlog(lista){
    let html = ' ';
    for(let i in lista){
        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body;+ '<br>';
        html += '<hr>';
    }
    document.getElementById('posts').innerHTML = html;
}