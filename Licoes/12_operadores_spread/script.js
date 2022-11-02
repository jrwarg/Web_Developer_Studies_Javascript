//Funciona para objetos e arrays

/* let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];

console.log(outros); 

let info = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90
};

let novaInfo = {
    ...info,
    cidade: 'Campina Grande',
    estado: 'Paraíba',
    país: 'Brasil'
}

console.log(novaInfo)
*/
// Usando o conceito em funções:

function adicionarInfo(info){
    let novaInfo = {
        ...info,
        status: 0,
        token: 'asexcfecc',
        data_cadastro: '...',
    }
    return novaInfo;
}

console.log(adicionarInfo({nome: 'Bonieky', sobrenome: 'Lacerda'}))