/* 3 grupos para pegar dimensões:

1) offSetWidth e offsetHeight-> 
    document.querySelector('.class').offSetWidth/Height = 
    largura + padding + scrollbar + borda

2) clientWidth e clientHeight->
    document.querySelector('.class').clientWidth/Height =
    largura - scroolbar

3) scrollWidth e scrollHeigth->
    document.querySelector('.classs').scrollWidth =
    conteúdo total - scrollbar
    document.querySelector('.class').scrollHeight = 
     */

/* document.querySelector('.texto').scrollTop/Left = 
    posição do scroll no elemento (localização do scroll)

    Se for da tela inteira:
    window.scrollX/Y

    para Determinar a Posição:
    document.querySelector('.texto').scrollTo(0,0)
 */

const subirTela = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
})};

const botaoNaTela = () => {
    
    if (window.scrollY == 0) {
        document.querySelector('.scrollButton').style.display = 'none';

    } else {
        document.querySelector('.scrollButton').style.display = 'block';
    }
  };

 // Não é a melhor solução (fica processando...) setInterval(botaoNaTela, 1000);

 // Melhor monitorar evento do scroll na tela...

 window.addEventListener('scroll', botaoNaTela);
   