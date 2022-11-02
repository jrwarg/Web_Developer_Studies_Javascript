/*
let preco = 40;
if (preco <= 45) {
    console.log("O preço da carne está barato");
}else if (preco === 48.3){ 
    console.log("O preço da carne está normal");
} else {
    console.log("O preço da carne está caro")
};


let preco = 18
if (preco >= 20 ? console.log("Carne cara") : console.log("Carne barata"));

let profesion = 'atleta';

console.log("Profissão: " + profesion)

switch(profesion){
    case 'fiscal':
        console.log("Sua camisa será Verde")
        break;
    case 'bombeiro':
        console.log("Sua camisa será Vermelha");
        break;
    case 'policial':
        console.log("Sua camisa será Preta");
        break;
    default:
        console.log("Sua camisa será Azul");
        break;
}

// *************** FUNÇÕES *********************///
/*
function somarNum(n1,n2) {
    let resultado = n1 + n2;
    console.log (`O resultado da soma entre ${n1} e ${n2} é: ` + resultado);
}

somarNum(10,20);

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

let completo = nomeCompleto('José Reinaldo', 'Guerra');
console.log('Nome completo : ' + completo);



function maiorDeIdade (idade) {

    if (idade >= 18) {
        return true;
    }else {
        return false;
    }
}
let idade = 12;
let verificar = maiorDeIdade(idade);


if (verificar) {
    console.log('É maior de Idade');
} else {
    console.log('É menor de idade');
}


function calcPct(x, y) {
    let pct =  (y / x) *100;
    return pct;
}

let x = 220;
let y = 20;
let pct = calcPct(x, y);
console.log(`${pct} % de ${x} é ${y}`)
/*
function calcularImovel(metragem, quartos) {
    let m2 = 3.000;
     if (quartos == 0 || quartos == 1){
        return (m2 * 1) * metragem;
    } else if (quartos == 2) {
        return (m2 * 1.2) * metragem;
    } else if (quartos == 3) {
        return (m2 * 1.5) * metragem;
    }
}


function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;
    switch(quartos) {
            default:
            case 1:
                preco = metragem * m2;
                break;
            case 2:
                preco = metragem * (m2 * 1.2);
                break;
            case 3:
                preco = metragem * (m2 * 1.5);
                break;
    }
    return preco;
            
}

let metragem = 123
let quartos = 2;
let preco = calcularImovel(metragem, quartos);
console.log (`O preço do imóvel com ${metragem} m2 e ${quartos} quartos è R$ ` + (preco));


function validar (usuario, senha) {
    if (usuario === "pedro" && senha === 123) {
        return true;
    } else {
        return false;
    }
}

let usuario = 'pedro';
let senha = 123;
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido');
} else {
    console.log('Acesso negado');
}

// ==== ARROW FUNCTIONS ====
// function "normal":
function somar(x, y){
   return x + y;
}

const somar = (x, y) => {return x + y}; // simplificação 2 argumentos c; return
console.log(somar(10,5));

const mult = (x,y) => x*y; // simplificação com 2 argumentos sem return(result direto)
console.log(mult(10,5));

const sobrenome1 = sob => 'Bonieky ' + sob; // simpl. com 1 argument (
    // somente para 1 argumento!!
console.log(sobrenome1('Lacerda'));
*/


//  ======== DINÂMICA DE VARIÁVEIS EM FUNÇÕES ============

// let count = 0; // escopo global (pode ser usada fora da função)
/*
const add = () => count++;
add();add();
console.log(count);


const add = () => {
    let count = 0;  // ->> Variável ESCOPO LOCAl == neste caso terá prioridade sobre a GLOBAL
    count++;
}
add();
add();

console.log(count);// resultado: 0 -> a variável está definida em escopo local (somente é replicado o valor...)


//=== FUNÇÕES DENTRO DE OUTRAS FUNÇÕES ==

//function square(x) {
//    return x * x;
//}
//console.log(square(2));

function addSquare(a, b) {
    const square = (x) => x * x;
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquare(2,3));


//  =========  ARRAYS  =============
let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];

ingredientes.pop(); // retira o último item

ingredientes.shift(); // retira o primeiro item

console.log(ingredientes);

console.log(`O Total de ingredientes é: ${ingredientes.length}`);

let carros = ['BMW ', ' Ferrari ', 'Mercedes'];
let x = 1;
console.log ('1. ' + carros[x]);

carros[1] = ' Audi ';
console.log('2. Lista com Audi :' + carros);

carros.push(' Volvo ');
console.log('3. Lista com Volvo: ' + carros);

console.log('4. Itens no array: ' + carros.length)


// ==========  OBJETOS  ===============

let personagem = {
    nome: 'José',
    idade: 62,
    país: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
    
};

personagem.nome = 'Pedro';
console.log(personagem.nome);
console.log(`${personagem.nome} tem ${personagem.idade} anos`);
console.log(personagem.caracteristicas.magia);
console.log(personagem.olhos[0])

personagem.caracteristicas.forca += 5;
console.log(`Força: ${personagem.caracteristicas.forca}`);



let personagem = {
    nome: 'Bonieky',
    idade: 90,
    carros: [
        { modelo: 'Fiat', cor: 'Azul'},
        { modelo: 'Ferrari', cor: 'Vermelho'}
    ]
}

console.log(personagem.carros[1].modelo);



// ====== FUNÇÕES DENTRO DE OBJETOS  =========
let pessoa = {
    nome: 'José Reinaldo',
    sobrenome: 'Guerra',
    idade: 62,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());



// ========= LOOPS ============
// =========   FOR  ===========

for (let n=0; n<=10; n++){
    console.log('Número '+ n);
}


// ======== WHILE ===========

let numero = 1;

while (numero <= 100) {
    console.log(`O número da vez é ${numero}`);
    numero++;
}


let fruits = ['Maça', 'Uva', 'Banana'];

//for(n = 0; n < fruits.length; n++){
    for (let x in fruits){ // esse é um outro jeito de fazer... Melhor!
    console.log(fruits[x]);
}


// ========  funções em Arrays  ===========

let fruits = ['Maça', 'Uva', 'Banana', 'Laranja'];

fruits.push('Kiwi');
console.log(fruits.join(', ')); // Gera uma string)

fruits[fruits.length - 1] = 'Pera';

console.log(fruits);


// ===  ORDENAÇÃO DE ARRAYS ===
let fruits = ['Maça', 'Uva', 'Banana', 'Laranja'];

fruits.sort(); // em ordem alfabética, numérica
fruits.reverse(); // inverte a ordem do array (para ordem decrescente)

console.log(fruits);


let cars = [
    { brand: 'Fiat', year: 2022},
    { brand: 'Ferrari', year: 2020},
    { brand: 'BMW', year: 2018}
]

cars.sort((a, b) => a.year - b.year); // +++ SIMPLES!!!
//{
    /*if (a.year > b.year){
        return 1;
    } else if ( b.year > a.year){
        return -1;
    } else {
        return 0; 
    }
    //return a.year - b.year; // + simples...
//});

for (let x in cars){
    console.log(cars[x])
}


// ===== ITERAÇÃO EM ARRAYS ====

let fruits = ['Maça', 'Uva', 'Banana', 'Laranja'];
// queremos somente os items maiores que 4 caracteres...
// ATENÇÃO: O filtro tem que gerar uma variável!!!
let bigFruits = fruits.filter((item) => item.length > 4 );
console.log(bigFruits)

// queremos saber se TODOS os items tem mais que 3 caracteres...
let ok = fruits.every((item) => item.length > 3 );
if (ok) {
    console.log('Todos são maiores que 3');
} else {
    console.log('Nem todos são maiores que 3');
};
// queremos saber se ALGUM dos items é maior que 3 caracteres...
let what = fruits.some((item) => item.length > 3 );
if (what) {
    console.log('Algum item é maior que 3');
} else {
    console.log('Nenhum item é maior que 3');
};

*/

//  ======  DOM ======
// Document Object Model










