//Funções 

    function somar(n1, n2){
        resultado = n1+n2;
        return resultado
    };

    let res = somar(10, 15);

    console.log("O resultado é: "+res);

//=================================================    

function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    }
    else{
        return false;
    };
}

let verificação = maiorDeIdade(66);

console.log(verificação);