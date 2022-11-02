/* JAVASCRIPT
> Linguagem de script e multiplataforma
    script = = Real Time (em tempo de execução)
    multiplataforma = Sos diferentes
> Client Side - É executado do lado do cliente(usuário) 

> Tem capacidade de interagir com elementos de uma página HTML
    Graças ao DOM  = Document Object Model
    Modelo de árvore = possivel alterar qualquer elemento da página = modelo de objeto

> Muito usado no desenvolvimento de páginas e aplicativos mobile hibridos (Android e IOS)

> Tem TIPAGEM DINÂMICA => Não é preciso declarar os tipos antecipadamente..A linguagemm já "sabe" o tipo na declaração

/**
 * // ** SELECIONANDO ELEMENTOS NA DOM ** //
 * ******************
 * getElementById() 
 * *******************
const element = document.getElementById("blog-title")
 
 console.log(element)
 
 ***************************
 getElementByClassName()
 
 const element = document.getElementsByClassName("blog-title")
 
 ***************************
 getElementByTagName()
 
 const element = document.getElementsByTagName("h1")
 
 
 // querySelector() => seleciona pelo seletor como no CSS / Pega o primeiro que achar...
 
 const element = document.querySelector('title')
 console.log(element)
 
 // querySelectorAll()
 
 const elements = document.querySelectorAll("#one")
 
 elements.forEach(el => console.log(el))
 
 // ** Diferença entre HTMLCollection e NodeList
 // HTMLCollection é uma lista de elementos selecionados (não é um array...)
 // NodeList aceita a execução de estruturas de repetição, por exemplo: forEach
 
Qual usar?

getElementById (element)
getElementByClassName (HTMLCollection)
getelementByTagName (HTMLCollection) 
querySelector (element)
querySelectorAll (Nodelist)


// MANIPULANDO CONTEÚDO
// textContent
// innerText
// innerHTML
// value
// Atributos

const element = document.querySelector('h1')

element.textContent += " Olá, Devs!"

console.log(element.textContent)
// ============================================

const element = document.querySelector('h1')

element.innerText = " Olá, Devs!"

console.log(element.textContent)
// ==========================================

const element = document.querySelector('h1')

element.innerHTML = "Ola Devs! <small>!!!</small>"
// ==========================================

const element = document.querySelector('input')
element.value = "Valor que eu quiser"
console.log(element.value)
element.value = "Outro valor"
// ===========================================

const header = document.querySelector('header')
// adicionando atributos via setAttribute
header.setAttribute("id", "header")

const headerID = document.querySelector('#header')
// pegar o atributo
console.log(headerID.getAttribute('class'))
// removendo atributos
header.remove('id')
header.setAttribute('class', 'bg header')
// ============================================

// ALTERANDO ESTILOS
// style
// classList

const element = document.querySelector('body')
element.style.backgroundColor = "#f9f3D2"
console.log(element.style.backgroundColor)

// ============================================

const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)

// ============================================
element.classList.remove('active') => há varios prototypes...
// comando toggle= Se existir ele tira, senão adiciona = interruptor ON/OFF
element.classList.toggle('active')

// NAVEGANDO PELOS ELEMENTOS
// parentNode parentElement => selecionar os pais dos elementos
// childNodes children => selecionar os filhos dos elementos
// nextSibling nextelementSibling => selecionar os irmãos dos elementos
// previousSibling previousElementSibling

const body = document.querySelector('body')
console.log(body.parentElement)
const h1 = document.querySelector('h1')
console.log(h1.parentNode)

const el = document.querySelector('body')
console.log(el.children) // gera HTMLCollection e elimina os espaços vazios (na mesma operação)
console.log(el.childNodes)// gera Node List
console.log(el.firstChild)// considera espaço vazio
console.log(el.firstElementChild) // não considera espaços vazios  = primeiro elemento mesmo
console.log(el.lastChild)
console.log(el.lastElementChild)

const el = document.querySelector('header')
console.log(el.nextElementSibling)
nextSibling => considera espaços vazios
nextElementSibling => não considera espaços vazios
const el = document.querySelector('body script')
console.log(el.previousSibling) // considera espaços vazios
console.log(el.previousElementSibling) // Não considera espaços vazios


// ** CRIANDO E ADICIONANDO ELEMENTOS ** //
// createElement
// prepend
// insertBefore
const div = document.createElement('div')
div.innerText = "Olá, Devs!" // => criada a div, mas para aparecer:
const body = document.querySelector('body')
//body.append(div) // adicionando a div depois do elemento body
//body.prepend(div) // adicionando a div antes do elemento indicado

const script = body.querySelector('script')
body.insertBefore(div, script) // => div criada entre o header e o script -> antes do script(before...)

** Simulando um insert.AFTER (que não existe...)**
const header = body.querySelector('body')
body.insertBefore(div, header.nextElementSibling) => inserindo a div após o próximo irmão de header, posicionando a  div depois do elemento header

// ** EVENTOS ** //
// disparando evento onclick -> função indicada no index.html no h1...
function print(){
    console.log('print')
}

const input = document.querySelector('input')
input.onkeydown = function(){
    console.log('rodei...')
}

const h1 = document.querySelector('h1')
h1.addEventListener('mouseover', print)

function print(){
    console.log('print')
}


const h1 = document.querySelector('h1')
h1.addEventListener('click', print)
//h1.onclick = print // => Desta forma só haverá a execução da última função listada. É melhor usar 
//addEventListener...

function print(){
    console.log('Outro momento...')
}

*/

// Argumento event
=> pega o evento indicado antes(onkeydown neste caso...) e trabalha as categorias de 
eventos apresentados

const input = document.querySelector('input')
input.onkeydown = function(event){
    console.log(event) // event.onkeydown, .currentTarget.value (pega o valor dentro do input...)
}

Verificar o prototype gerado no console.log para ver a lista de funcionalidades.



