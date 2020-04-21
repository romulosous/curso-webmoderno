console.log(soma(3, 4));

// function declaration
function soma(x, y){
    return x + y;
}

// function expression
const sub = function(x, y){
    return x - y;
}

// named function expression
const mult = function mult(x, y){
    return x + y;
}

console.log(mult(3, 4));


/*
   Podemos também definir usando o construtor new,
   mas é menos performático que os outros métodos.
   Eu não recomendo essa opção.
*/

new function(){ /* codigo */ };
new function(x, y){ /* codigo */ }(1, 2); // Use parênteses se tiver argumentos.