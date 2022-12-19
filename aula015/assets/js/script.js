//Funções dentro de funções

function addSquares(a, b){
    const square = (x) =>{
        return x*x;
    };

    let sqr = square(a) + square(b);

    return sqr;
};

console.log(addSquares(2, 3));