const azul = () => {
    limpar();
    document.getElementById("titulo").classList.add('azul')
}
const vermelho = () => {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}
const verde = () => {
    limpar();
    document.getElementById("titulo").classList.add('verde')
}

const limpar = () =>{
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
}