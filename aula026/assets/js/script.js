//Manipulação de atributos

function clicou(){
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

 /* //Pegar atributos (getAttribute):

        console.log(input.getAttribute('placeholder'));

    //Saber e o elemento tem determinado atributo (hasAttribute):

        if(input.hasAttribute('placeholder')){
            console.log("Tem placeholder");
        }
        else{
            console.log("Não tem placeholder");
        }
*/
    //Colocar ou alterar um atributo(setAttribute):

    if(input.getAttribute('type') === 'password'){

        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar senha";
    }
    else if ( input.getAttribute('type') === 'text'){

        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar senha";
    };


};