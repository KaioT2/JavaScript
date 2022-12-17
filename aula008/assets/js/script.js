//Condicionais if / else

let idade = 90 ;

    if(idade < 18){
        console.log("Você não tem maioridade")
    }
    else{
        console.log("Você é maior de idade")
    }

let cor = "azul"

    if(cor=="azul"){
        console.log("O dia está ensolarado")
    }
    else{
        console.log("O dia não está ensolarado")
    }

//Condicionais == e ===

//Quando tem uma string e um number com valores parecidos o Js interpreta como iguais

if (idade == "90"){
    console.log("okk")
}

//Para isso ser contornado usa-se o === que compara exclusivamente o valor e o tipo 

//Já neste caso não funciona por causa do === 

if(idade === "90"){
    console.log("ok")
}