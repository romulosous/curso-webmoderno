// Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero){
    if (numero == 0 || numero == 1){
        return 1;
    }
    return numero * fatorial(numero - 1);
}

console.log(fatorial(5));

function fat(numero){
    if(numero == 0 || numero == 1){
        return 1;
    }
    let fat = 1;
    for( let i = 1; i <= numero; i++){
        fat *= i;
    }
    return fat;
}

console.log(fat(5));
