//String e Templete Strings

/*Template string é uma "Super String", nela você pode fazer a concatenação de uma variável com 
o texto apenas usando o placeholder (denominação para '${}') */

let nome = "Kaio";
let sobrenome = "Dias";

//Ex.:

//let nomeCompleto = 'Meu nome é ' + nome + ' ' + sobrenome;

let nomeCompleto = `Meu nome é ${nome} ${sobrenome}`; //Isso é um template string

console.log(nomeCompleto);