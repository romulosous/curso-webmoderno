const vetorInteiro = [4,8,7,9];
const vetorString = ['5','6','7','8'];
const vetorDouble = [7.4, 5.2, 7.5, 9.2];

function concatenar(...args){
    resultado = [];
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i]);
    }

    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))


