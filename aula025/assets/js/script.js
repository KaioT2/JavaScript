//Manipulação de elementos

function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector("ul");
    
    /*
    ul.innerHTML += "<li><strong>Item alterado</strong></li>"

    Comando "append" adiciona conteúdo ao elemento (no fim) ao contrário do "innerHTML" que substitui o elemento inteiro. 
    (Só funciona para texto)
    ex:
    

        ul.children[0].append(" (alterado)");

    
    Comando "appendChild" adiciona um elemento (no fim) a página, mas antes esse elemento deve ser criado na memória
    Ex:
    

        let newElement = document.createElement("li");
        newElement.innerText = "Item adicionado";

        ul.appendChild(newElement);
    */

    let newUl = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add" + (i+1);
        newUl.append(newLi);
    }

    ul.after(newUl);
};