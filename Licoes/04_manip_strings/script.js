let nome = 'José Reinaldo Guerra'


/* let resultado = nome.length;
resultado = nome.indexOf('Reinaldo'); // se não: -1

console.log(resultado); */

/* USO DO INDEXOF -> ENCONTRAR STRINGS

let resultado = ' ';

if (nome.indexOf('Silva') > -1){
    resultado = "Achou!";
} else {
    resultado = "Não achou!"
} */

let resultado = nome.slice(0, 10);
resultado = nome.substring(10, 15) // ldo Gu
resultado = nome.slice(-5) // uerra
resultado = nome.slice(-20, -15) // José
resultado = nome.replace('Reinaldo', 'Arnaldo') // substitue a string mas NÃO ALTERA A VARIÁVEL!!
resultado = nome.toUpperCase(); // JOSÉ REINALDO GUERRA
resultado = nome.toLocaleLowerCase() // josé reinaldo guerra
resultado = nome.concat(' grande guerreiro ');

resultado = nome.trim(); // remove espaços vazios da string (não funcionou com composto)
resultado = nome.charAt(2); // s
resultado = nome[2]; // s

resultado = nome.split(' '); // Gera um Array : ['José', 'Reinaldo', 'Guerra']
console.log(resultado) // José Reina

let exemplo = 'ovo, farinha, leite, açucar'
exemplo.trim();
exemplo = exemplo.split(' ')
console.log(exemplo)