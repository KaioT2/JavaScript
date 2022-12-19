//EXERCÍCIOS FUÇÕES:


/* 1:
Calcule a porcentagem entre dois números.
Ex: 25% 40 é 10.

Use os dados:
let x = 40; 
let y = 10;
let pct = calcPct(x,y);
console.log(`${pct}% de ${x} é ${y}`);
*/

    let x = 50; 
    let y = 6;

    function calcPct(x, y){
        let res = (y/x)*100;
        return res;
    }

    let pct = calcPct(x, y);
    console.log(`${pct}% de ${x} é ${y}`);

//==================================================================


/* 2:
    Calcule o preço do imóvel
    - m2 = 3.000
    - Se tiver um quarto, o m2 é 1x
    - Se tiver 2 quartos, o m2 é 1.2x
    - Se tiver 3 quartos, o m2 é 1.5x

    Use os dados:

    let metragem = 123;
    let quartos = 3;
    let preco = calcularImóvel(metragem, quartos);
    console.log(`A casa custa R$ ${preco}`);
*/

    let metragem = 123;
    let quartos = 2;
    let m2 = 3000;

    function calcularImóvel(metragem, quartos){
        if(quartos===1){
            m2 = 3000;
        }
        else if (quartos===2){
            m2 = 3000*1.2;
        }
        else if(quartos===3){
            m2 = 3000*1.5;
        }
        else{
            
        }

        let res = metragem * m2;

        return res;
    }

    let preco = calcularImóvel(metragem, quartos);
    console.log(`A casa custa R$ ${preco}`);


//==================================================================


    /* 3:

    Crie uma função para validar usuário e senha.
    Usuário correto: pedro
    Senha correta: 123

    Use os dados:

    let usuario = 'bonieky';
    let senha = '1234';
    let validacao = validar(usuario, senha);
    if(validacao){
        console.log('Acesso concediddo');
    }
    else{
        console.log('Acesso NEGADO!');
    }
    */


    let usuario = 'bonieky';
    let senha = '1234';

    function validar(usuario, senha){
        if(usuario === 'pedro' && senha === '123'){
           return true;
        }
        else{
            return false;
        };
    };

    let validacao = validar(usuario, senha);

    if(validacao){
        console.log('Acesso concediddo');
    }
    else{
        console.log('Acesso NEGADO!');
    }