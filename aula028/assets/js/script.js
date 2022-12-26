//Manipulação de classes

function clicou(){
    const button = document.querySelector('button');

  /*  
        button.classList.remove('azul');
        button.classList.add('verde')

       //O "replace" troca um pelo outro

       button.classList.replace('azul', 'verde');


  */
        //Se tiver, o "toggle" remove, se não tiver ele adiciona 
        button.classList.toggle('azul');

}