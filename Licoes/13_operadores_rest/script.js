// REST // 
// Independe de quantos parâmetros forem enviados
// transformados em array
// function adicionar(...numeros){
//     console.log(numeros)
// }

// adicionar(105, 12,  33, 44)

// Juntar o spread com o rest


function adicionar (nomes, ...novosNomes){
   let novoConjunto = [
     ...nomes,
     ...novosNomes
   ];

   return novoConjunto;
}
let nomes = ['Bonieky', 'Paulo'];
let outros = adicionar(nomes, 'Antonio', 'José', 'Maria');
console.log(outros)

