// Adicionando um listener para captar as teclas apertadas
// ToLowerCase porque todas as ids estão em lowercase
document.body.addEventListener('keyup', (event)=> {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    // pegar os valores de input
    let song = document.querySelector('#input').value;
    // transformar esses valores num array
    if(song !== ''){
        let songArray = song.split('');
        // chamar a função para tocar a sequencia do array
        playComposition(song);

    }
})

// Esta função associa o audio com a tecla
function playSound(sound){
    // tornando dinâmica a recepção com template string
    // arquivo de audio baseado na tecla digitada
    let audioElement = document.querySelector(`#s_${sound}`);
    // Encontrando a div associada a tecla digitada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // Há várias teclas que não fazem parte do sistema, então
    // verificamos se foi achado alguma coisa...
    if(audioElement){
        // Zerar o audio quando a tecla up, não espera acabar de tocar todo audio
        // currentTime controla o ponteiro do audio e volta ao início no tempo det.
        audioElement.currentTime = 0;
        // play é uma função disponível para audio
        audioElement.play();
    }
    // Se achar o keyElement, adicionar uma class (efeito do apertar a tecla)
    if(keyElement){
        // adicionar a classe active (que aplica o efeito)
        keyElement.classList.add('active');
        // setando um tempo para o evento
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
        

    }
}

function playComposition(songArray){
    // aumentar o tempo de execução
    let wait = 0;

    // Já temos a função que toca o som : playSound()
    // Temos que dar um loop nos itens e ir 'soltando' o som
    for(let songItem of songArray){
    // implementando o tempo entre itens:
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;

        // associar as letras aos itens
    }
}