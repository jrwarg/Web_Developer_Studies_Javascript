// Initial Data

let currentQuestion = 0; // armazenando a questão atual e depois mostrá-la
let correctAnswers = 0;


showQuestion(); // exibir a questão

// Events

document.querySelector('.scoreArea button').addEventListener('click', resetEvent);


// Functions

function showQuestion(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        // Achar a porcentagem de respostas (movimento da barra verde...)
        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${pct}%`;
        
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        // Pensando no 'custo' de processamento do DOM: 1 só manipulação-> consumo de memória/processamento
        let optionsHTML = '';
        for(let i in q.options){
            optionsHTML += 
            `<div data-op=${i} class='option'><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHTML;

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent);
        })

    } else {
        // acabaram as questões
        finishQuizz();
    }
}

function optionClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption){
        correctAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function finishQuizz(){
    let points = Math.floor((correctAnswers / questions.length) * 100);
    if(points < 30){
        document.querySelector('.scoreText1').innerHTML = 'Resultado insatisfatório!'
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if(points >= 30 && points < 70){
        document.querySelector('.scoreText1').innerHTML = 'Resultado RAZOÁVEL!'
        document.querySelector('.scorePct').style.color = '#FFFF00';
        
    } else if(points >= 70){
        document.querySelector('.scoreText1').innerHTML = 'Parabéns!!'
        document.querySelector('.scorePct').style.color = '#0D630D';

    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}`;

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
}

function resetEvent(){
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}