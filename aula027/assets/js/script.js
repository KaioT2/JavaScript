//Manipulação do CSS

function clicou(){
    const li = document.querySelector('li');

    li.style.backgroundColor = '#00F';
    li.style.color = '#fff';
    li.style.fontSize = '20px';

    const div = document.querySelector('#teste2');

    div.style.backgroundColor = '#f95';
    div.style.borderRadius = '20px';
    div.style.color = '#fff';
};