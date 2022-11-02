/*  ======= enviar arquivo =========

async function enviarArquivo(){

    let arquivo = document.getElementById('arquivo').files[0]; // files foi digitado, sem encontrar correspondencia 
    // para o envio de aruivos = formData() -> função obrigatória
    let body = new FormData();

    body.append('title', 'alguma coisa');
    body.append('arquivo', arquivo);


    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body, 
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    
    });
} 

//=========== mostrar arquivo/imagem na tela ==========

function mostrarArquivo(){
    let imagem = document.getElementById('imagem').files[0];
    
    // gerar uma URL a partir do próprio arquivo:
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 250;

    document.getElementById('area').appendChild(img);
}
*/

// ====== alternativa para mostrar imagem na tela =========

function mostrar(){
    // usar o file reader
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);

}