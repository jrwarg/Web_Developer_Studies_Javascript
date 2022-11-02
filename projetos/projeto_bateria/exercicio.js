// Contar a quantidade mínima de passos que a nossa pessoa 
//precisa dar para atravessar a rua, ou seja, sair da posição X 
//e chegar ou ultrapassar a posição Y.


function atravessaRua(x, y, z){
    let posInicial = x;
    let posFinal = y;
    let passo = z;

    let nrPassos = (posFinal - posInicial) / passo;

    console.log(nrPassos)
}

let vetor = ['a', 'b', 'a', 'a', 'c', 'b'];

let vetorOrdenado = vetor.sort();
let odd = '';
vetor.forEach(function(el, index){
    if (el == (index+1)){
        return el;
    } else {
        odd = el;
    }
});
console.log(odd)