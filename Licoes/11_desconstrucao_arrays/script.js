let info = ['Bonieky Lacerda', 'Bonieky', 'Lacerda', '@bonieky'];

// let [ nomeCompleto, nome, sobrenome, instagram] = info;

// console.log(nomeCompleto, nome, sobrenome, instagram)

// let [ a ] = info;
// console.log(a) // Neste caso só pega o primeiro item do array

// // para pegar somente o primeiro e o último item:

// let [ nomeCompleto, , , instagram] = info // deixar em branco, mas citado
// console.log(nomeCompleto, instagram)

// let [ nome, sobrenome ] = [ 'Bonieky', 'Lacerda']; // desconstrução direta
// console.log(nome, sobrenome)

// let [ nome, sobrenome, idade = 90 ] = [ 'Bonieky', 'Lacerda']; // criação de valor padrão para variavel não presente no array
// console.log(nome, sobrenome, idade)

let criar = ( ) =>  [1,2,3]

let [a, b, c] = criar();
console.log(a, b, c);