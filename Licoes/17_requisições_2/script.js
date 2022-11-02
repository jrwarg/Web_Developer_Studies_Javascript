async function inserirPost(){
    document.getElementById('posts').innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify({
            id: 101,
            title: 'Título de Teste',
            body: 'Algum texto aqui...'
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });
    let json = await req.json();
   
    console.log(json)

}
