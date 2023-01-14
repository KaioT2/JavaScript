//Requisições

document.querySelector('#botao').addEventListener('click',clicou);

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts') //'fetch' faz a requisição
    .then((response) => { //'then' = apoós isso faça...
        return response.json();
    })
    .then((json) =>{
        alert(`Título do primeiro post: ${json[0].title}`)
    })
};