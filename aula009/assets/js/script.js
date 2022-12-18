//Multicondicionais && e ||
//Condicional dupla if else

/*
    No condicional && as duas condições devem ser atendidads para a 
    função ser "verdadeira" 
*/


    let idade = 70;

    if(idade >= 18 && idade <= 60){
        console.log("Res1")
    }
    //Nesse caso não vai funcionar pois não atende as duas condições


/*
    Já no  condicional || se uma das condições forem atendidas a função
    é colocada como "verdadeira";
*/

    if(idade >= 18 || idade <= 60){
        console.log("Res2")
    }
    /*Nesse caso vai funcionar pois mesmo idade sendo menor que 18 ela
    ainda atende a condição de ser menor ou igual a 60 o que torna a 
    função verdadeira*/
    
    


    /*A condicional dupla basicamente permite fazer vários testes em
    uma só expressão sem ter de comocar um if dentro do outro*/

    if(idade < 18){
        console.log("Você é uma criança")
    }
    else if(idade >=18 && idade < 60){
        console.log("Você é um adulto")
    }
    else{
        console.log("Você é um idoso")
    }