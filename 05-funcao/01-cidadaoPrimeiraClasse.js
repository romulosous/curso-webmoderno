// função em JS é First-Class Object (citizens)
// Higher-order function

/* 
    Entede-se que uma linguagem de programação tem Função First-class quando
    suas funções são tratadas como qualquer outra variável. Por exemplo, numa
    linguagem desse tipo, a função pode ser passada como argumento pra outras
    funções, ser retornada por outra função e pode ser atribuída como um valor
    à uma variável.
*/

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const func2 = function() { }

/*
    Nós atribuímos uma Função Anônima à uma Variável, então usamos a variável pra
    chamar a função adicionando parênteses () no fim.
*/

// Armazenar em um array
const array = [function(a, b){ return a + b}, fun1, func2]
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function (){ return 'Opa'}
console.log(obj.falar());

// Passar função como param
function run(fun){
    fun()
}

run(function(){ console.log('Executando...')});

// Passar uma função como um Argumento

function sayHello(){
    return "Hello, ";
}

function greeting(helloMessage, name){
    console.log(helloMessage() + name);
} 

greeting(sayHello, "World!");

/*
    A função que passamos como um argumento pra outra função,
    chamou uma Função Callback. sayHello é uma Função Callback.
 */

// Um função pode retornar/conter um funcao
function soma(a, b){
    return function (c = 0){ //
        console.log(a + b + c);
    }
}

soma(2, 3)(4);



const cincoMais = soma(2, 3);
cincoMais(4);
cincoMais();
