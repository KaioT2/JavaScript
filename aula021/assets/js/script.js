//Ordenação de array 

let cars = [
    {brand: 'Ferrari', year: '2022'},
    {brand: 'Bmw', year: '2018'},
    {brand: 'Fiat', year: '2020'}
]

cars.sort((a, b) => a.year - b.year);

console.log(cars);

//Interação de array

//Filtrar os itens do array (filter)
//Ex:

let fruits = ['banana', 'laranja', 'maça', 'pera'];

let bigFruits = fruits.filter((item) => item.length > 4);

console.log(bigFruits);