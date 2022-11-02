

let btn = document.querySelector('#send');



let list = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

btn.addEventListener('click', function(){
    let input = document.querySelector('#name').value;
    list.push(input) 
    document.querySelector('#item').innerHTML = 
    list.map(item => `<li> ${item} </li>`).join(' ') ; 
    document.querySelector('#name').value = null;
 })



//     e.preventDefault;

//     let text = document.querySelector('#name').value;
//     let list = document.querySelector('#item').innerHTML;

//     list += "<li>" + text + "</li>";

//     document.querySelector('#item').innerHTML = list;

//     document.querySelector('#name').value = ' ';
// })







