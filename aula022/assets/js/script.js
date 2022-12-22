//Interação de array

let fruits = ['Banana', 'Laranja', 'Maça', 'Pera'];

/*
    Função "filter": filtra o array com base em um criterio definido nos parametros da função.

    ex:

    let bigFruits = fruits.filter((item) => item.length> 4);

    console.log(bigFruits);

=========================================================================================================

    Função "every" filtra o array com base em um critério e só retorna verdadediro se todos os itens
    atenderem a condição determinada.

    ex:

    let ok = fruits.every((value) => value.length > 3);

    if(ok){
        console.log("Todos são maiores que 3")
    }
    else{
        console.log("Não são todos maior que 3")
    }

=========================================================================================================

    Função "some" filtra o array com base em um critério e retorna verdadeiro se algum item atender a 
    condição determinada.

    ex:

    let ok = fruits.every((value) => value.length > 3);

    if(ok){
        console.log("Algum item é maior que 3")
    }
    else{
        console.log("Nenhum item é maior que 3")
    }

=========================================================================================================

    Função "includes": Procura no array um valor específico e retorna verdadeiro se for encontrado esse 
    valor.

    ex:*/

    if(fruits.includes('Uva')){
        console.log('Tem uva sim!');
    }
    else{
        console.log('Não tem uva ...')
    }

   