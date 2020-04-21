// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b);
}

const imprimirMultiplicacao = function(a, b){
    console.log(a * b);
}

imprimirSoma(2, 3);
imprimirMultiplicacao(2, 8);


// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a +b;
}

const multiplicacao = (a, b) => {
    return a * b;
}

console.log(multiplicacao(10, 10));
console.log(soma(2, 3));

//retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = texto => console.log(texto);
imprimir2("Ola");



const fatorial = fat =>{
    if (fat == 0 || fat == 1){
        return 1
    }

    return fat * fatorial(fat - 1)
}

console.log(fatorial(5))


function potencia(a, b){ 
        if (b == 0){
            return 1
        }
        if (b == 1 ){
            return a
        }
        return a * potencia(a ,b - 1)
}

console.log(potencia(3, 2))
console.log(potencia(2, 0))
console.log(potencia(3,1))


