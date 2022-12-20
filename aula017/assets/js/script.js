//Objetos

let personagem = {
    nome: 'Kaio',
    idade: '16',

    carros: [
        {modelo: 'Ferrari 458', cor: 'Vermelho'},
        {modelo: 'Jaguar f-Type', cor: 'preto'},
        {modelo: 'Lamborghini Huracan', cor: 'amarelo'}
    ]
};

//console.log(personagem);

//Funções dentro de objetos:

let pessoa = {
    nome: 'Julio',
    sobrenome: 'Cordeiro',
    idade: '25',
    nomeCompleto: function (){
        return `${this.nome} ${this.sobrenome}`;
    }   
}

console.log(pessoa.nomeCompleto());