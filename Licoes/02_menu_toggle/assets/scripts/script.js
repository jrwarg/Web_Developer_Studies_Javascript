/* ==>> 1a. forma de resolução:
function menuToggle(){
    let menuArea = document.getElementById("menu-area");
    
    if (menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
}


function menuToggle() { // DESTA MANEIRA NÃO FUNCIONA!!
    let menuArea = document.getElementById('menu-area').style.width == '0px';
    
    if (menuArea == true){
        menuArea = '200px';
    } else {
        menuArea == '0px';
    }
}
}


// 2a. forma de resolução:

function menuToggle() {
    let menuArea = document.getElementById("menu-area");
    
    if (menuArea.style.width == '200px'){
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }
}

function calc () {
    let p = '';
    let input = document.querySelector("#num").value;
    // let valor1 = input.value;
    if (input % 1 === 0) {
        for (let i = 0; i <= 10; i++){
      p += (input + ' x ' + i + ' = ' + input * i)+  "</br>";
    }
        document.getElementById('paragrafo').innerHTML = p;
    } else {
        document.getElementById('paragrafo').innerHTML = "Só são válidos números inteiros! Tente outra vez..."
    }
}

let carros = [ 'Ferrari', 'Fusca', 'Gol', 'Palio'];

let arr = '<ul> ';
for (let i in carros) {
    arr+= '<li>' + carros[i] + '</li>';
}
arr+= '</ul>';
document.getElementById('id1').innerHTML = arr;

let html = ' ';

// loop while x for

// let a = 0;
// while(a <= 10){
//     html += 'Número :' + ' ' + a + '<br>';
//     a++;
// } 

for(let a = 0; a<=10; a++){
    html += 'Número : ' + a + '<br>';
}

document.getElementById('id2').innerHTML = html;

function trocarImagem(filename, _animalname) {
    document.querySelector('.imagem').setAttribute('src','assets/img/'+filename);
    document.querySelector('.imagem').setAttribute('data-blabla','_animalname');
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-blabla');
    alert('O animal é: '+animal);
}
*/
