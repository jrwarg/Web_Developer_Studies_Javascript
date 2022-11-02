let cart = []; // Este é o carrinho
let modalQt = 1; // variável para controle das quantidade
let modalKey = 0; // variável para pegar qual a pizza escolhida(data-key)

const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// Listagem das pizzas
pizzaJson.map((item, index)=>{
    // clonar estrutura models
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    
    // para detectar qual a pizza está na modal -> usaremos o index (id das pizzas)
    pizzaItem.setAttribute('data-key', index);
    // preencher as imagens de pizza-item
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    // preencher os preços de pizza-item
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    // preencher os nomes de pizza-item
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    // preencher as descrições de pizza-item
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
    // adicionando evento click na tag a,
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        // primeiro cancelando seu default (que atualizaria a tela)
        e.preventDefault();
        // informação sobre o produto selecionado (identificado pelo id)
        // target.closest procura o elemento mais próximo que tenha o item do parâmetro
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        // adicionar variável referente à quantidade do produto no Modal:
        modalQt = 1;
        // Importante: A informação da pizza selecionada (let key acima) se perderá ao encerramento
        // desta função. Então é preciso tornar disponível essa info para sempre 
        modalKey = key;

        // preencher as infos do Modal
        c('.pizzaBig img').src = pizzaJson[key].img; // Nota: acesso à imagem pelo SRC , não Innnerhtml
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        // Reset da seleção do tamanho da pizza após o cancelamento do Modal:
        c('.pizzaInfo--size.selected').classList.remove('selected');
        // Percorrer cada um dos elementos do pizzaJson, selecionar span e aplicar o index
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            // Seleção do tamanho automático (grande) do Modal após seu cancelamento e nova exibição:
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        // Exibir a quantidade padrão  e resetar para 1 sempre que o Modal for fechado e novamente aberto
        c('.pizzaInfo--qt').innerHTML = modalQt;
        // tornando a aparição do modal mais suave
        c('.pizzaWindowArea').style.opacity = 0; // desaparece da tela
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
    // método append acrescenta (ao invés de alterar como innerHTML)
    c('.pizza-area').append( pizzaItem );
});

// Eventos do MODAL
function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
}
// ao invés de colocarmos os eventos onclick diretamente na tag HTML:
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});
c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    // setando a execução somente para quantidades maiores ou iguais a 1 (0 pizza não dá...)
    if(modalQt > 1) {
        // acessando a variável modalQt e diminuindo um
        modalQt--;
        // atualizando o valor da variável modalQt na tela
        c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});
c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    // acessando a variável modalQt e acrescentando mais um
    modalQt++;
    // atualizando o valor da variável modalQt na tela
    c('.pizzaInfo--qt').innerHTML = modalQt;
});
cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        // Selecionando uma opção e desmarcando os outros itens
        c('.pizzaInfo--size.selected').classList.remove('selected');
        // adicionar a classe selected no item clicado
        size.classList.add('selected');
    });
});
c('.pizzaInfo--addButton').addEventListener('click', ()=>{
    // Qual a pizza?
    // console.log('Pizza: ' + modalKey);
    // Qual o tamanho?
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
    //console.log('tamanho: '+size)
    // Quantas pizzas?
    //console.log('quantidade: '+ modalQt);

    // Pizzas do mesmo tamanho tem que ser adicionadas juntas no carrinho (não em itens
    //separados no array...)
    // Criar um IDENTIFICADOR juntando o id da pizza com o tamanho dela
    let identifier = pizzaJson[modalKey].id+'@'+size;
    // verficação se já há o item no carrinho (através do identifier)
    let key = cart.findIndex((item)=>item.identifier == identifier);
    if(key > -1) {
        cart[key].qt += modalQt;
    } else {
        cart.push({
            // adicionar o identificador no carrinho:
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
        });
    }
    updateCart();
    closeModal();
});
// Para mostrar o carrinho no Mobile
c('.menu-openner').addEventListener('click', () => {
    if(cart.length > 0) {
        c('aside').style.left = '0';
    }
});
// Para fechar o carrinho no Mobile
c('.menu-closer').addEventListener('click', ()=>{
    c('aside').style.left = '100vw';
});

function updateCart() {
    // Mostrar quantos itens há no carrinho
    c('.menu-openner span').innerHTML = cart.length;
    // Mostrar o carrinho ou não?
    if(cart.length > 0) {
        c('aside').classList.add('show');
        // zerar a lista para mostrar
        c('.cart').innerHTML = '';
        // Criar variáveis para os cálculos do pedido
        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart) {
             // identificar qual a pizza
            let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);
            // pegar e calcular o subtotal -> Isto acontece dentro do for : os demais fora
            subtotal += pizzaItem.price * cart[i].qt;
            // Clonar o cart--item para preencher infos e exibir na tela
            let cartItem = c('.models .cart--item').cloneNode(true);
            // Mostrar os tamanhos ao lado do nome da pizza:
            let pizzaSizeName;
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                    break;
                case 1:
                    pizzaSizeName = 'M';
                    break;
                case 2:
                    pizzaSizeName = 'G';
                    break;
            }
            // monta a string             
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;
            // preencher as infos
            cartItem.querySelector('img').src = pizzaItem.img;
            // como não sabemos o tamanho, concatenamos com o nome para mostrar como string 
            // ver variável pizzaName acima...
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            // fazendo os botões de quantidade funcionarem:
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if(cart[i].qt > 1) {
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart[i].qt++;
            // usando a própria função updateCart podemos atualizar tudo (isso é bom para as contas
            // e a apresentação de subtotal, desconto e total)
                updateCart();
            });

            c('.cart').append(cartItem);
        }
        // estabelecer o percentual de desconto (manual)
        desconto = subtotal * 0.1;
        total = subtotal - desconto;
        // exibir na tela os resultados:
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        c('aside').classList.remove('show');
        // para fechar no mobile
        c('aside').style.left = '100vw';
    }
}