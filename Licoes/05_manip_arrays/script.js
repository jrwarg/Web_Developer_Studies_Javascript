let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// não alteram o array:

// let res = lista.toString(); // em string, põe uma vírgula
// let res = lista.join(' - '); // Ovo - Farinha - Corante -  Massa
// let res = lista.indexOf('Corante'); // 2 -> retorna a posição - se não existe = -1

// Alteram o array: 

// lista.pop(); // ['Ovo', 'Farinha', 'Corante'] retira o ultimo
// lista.shift(); // ['Farinha', 'Corante', ' Massa'] retira o primeiro
// lista.push('Leite'); // adiciona na última posição
// lista[0]= 'Ovos'; // altera o item
// lista[4]= 'Carne'; // se não existe ele INSERE...
// lista[lista.length] = 'Óleo'; // outra forma de inserir

// Como remover um item do array:

// delete lista[1]; // deleta o item Farinha, mas mantem o slot (vazio)
// lista.splice(1, 1); // remove a partir do 1, remove 1 item ['Ovo', 'Corante', ' Massa']
// lista.splice(1); // ['Ovo'] remove todos a partir do 1o. item
// lista.splice(lista.length-1, 1);//  ['Ovo', 'Farinha', 'Corante']

//  let lista2 = ['Prato', 'Liquidificador'];
//  let res = lista.concat(lista2) ;
// lista.sort(); // ordena em ordem alfabética(no caso)
// lista.reverse(); // inverte

let listaNum = [45,4,9,16,25];
let lista2 = [];
// map => mapeia e gera um novo array:
// lista2 = listaNum.map(function(item){
//     return item * 2;
// })

// outra maneira de percorrer o array: melhor o map, neste caso
// for (let i in listaNum) {
//     lista2.push(listaNum[i] * 2);
// }

// Filter => retorna true ou false aproveita ou não o item
/* lista2 = listaNum.filter(function(item){
    if (item < 20){
        return true;
    } else {
        return false;
    }
});// ape nas nums < 20...*/

// Every => retorna true ou false mas NÃO GERA OUTRA ARRAY
// verifica se TODOS os itens correspondem à consulta
// Some => retorna true ou false mas NÃO GERA OUTRA ARRAY
// verifica se ALGUM os itens correspondem à consulta
// lista2 = listaNum.some(function(item){
//     // if(item > 20){
//     //     return true;
//     // }else{
//     //     return false;
//     // }

//     return (item > 20)? true :false;
// });

lista2 = listaNum.find(function(item){ // pode receber index e array também
    return (item == 16)? true : false;
})

listaNum = [
    {id: 1,nome: 'José',sobrenome: 'Guerra'},
    {id: 2, nome: 'Paulo', sobrenome: 'Benedito'},
    {id: 3, nome: 'João', sobrenome: 'Barbosa'}
]

lista2 = listaNum.find(function(item){
    return (item.sobrenome == 'Guerra' )? true : false;
})

let res = lista2;

console.log(res);