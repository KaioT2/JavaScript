//Exe - Lista de tarefas simples

const input = document.querySelector('input');
input.addEventListener('keyup', enter);

const lista = document.querySelector('ul');

function enter(e){
      let tecla = e.code;

      if(tecla === 'Enter'){
            let novoItem = document.createElement('li');
            novoItem.innerHTML = input.value;

            lista.appendChild(novoItem);

            input.value = " ";
      };
}
