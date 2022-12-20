//Loops(for)

let ret = [];

for(i = 0 ; i < 10; i++){
    ret[i] = i+1;

    console.log(ret[i]);
};

//Quando quiser usar um for para executar um array pode-se uasar essa estrutura:

let cor = ['azul', 'amarelo', 'vermelho']

for(let i in cor){
    console.log(cor[i]);
};

//Quando quero pegar o valor que está em uma posição do array usa-se 
//a mesma estrutura porem comn o 'of':

let carros = [
    {nome: 'ferrari', cor: 'preto'},
    {nome: 'palio', cor: 'azul'},
    {nome: 'celta', cor: 'vermelho'}
]

for(let carro of carros){
    console.log(`${carro.nome} - ${carro.cor}`)
};

//Colocar todas as letrasde uma String em maiúscula (toUpperCase):

for(let i in cor){
    carros[i].nome = carros[i].nome.toUpperCase();
    carros[i].cor = carros[i].cor.toUpperCase();
};

for(let carro of carros){
    console.log(`${carro.nome} - ${carro.cor}`)
};

