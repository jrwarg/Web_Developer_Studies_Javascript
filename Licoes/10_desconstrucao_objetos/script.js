let pessoa = {
    nome: 'José',
    nomemeio: 'Reinaldo',
    sobrenome: 'Guerra',
    idade: 90,
    social: {
        facebook: 'b7web',
        instagram: {
            url: '@jrwar',
            seguidores: 100
        }
    },
/* 
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    } */
}

// console.log(pessoa.nomeCompleto())

// DESCONSTRUÇÃO = informações transformadas em variáveis

//let { nome, sobrenome, idade} = pessoa;

// mudando o nome das variáveis:

//let {nome:pessoaNome, sobrenome:pessoaSobre, idade:pessoaIdade} = pessoa;

// inserindo um valor padrão para uma variável não inserida no objeto:

// let{ facebook, instagram } = pessoa.social

// let {nome, idade, social:{instagram:{url:instagram, seguidores}}} = pessoa; // só o instagram transforma-se em variável
// console.log(nome, idade, instagram, seguidores)

// Forma convencional de função: para ex: pegar nome completo:

// function pegarNomeCompleto(obj) {
//     return `${obj.nome} ${obj.sobrenome}`;
// }
// console.log(pegarNomeCompleto(pessoa))

// Nova forma com desconstrução de objetos:

function pegarNomeCompleto({nome, nomemeio = 'Reinaldo',sobrenome, social:{instagram:{url:instagram}}}){
    return `${nome} ${sobrenome} ${nomemeio} (Siga em ${instagram})`;
}
console.log(pegarNomeCompleto(pessoa));


