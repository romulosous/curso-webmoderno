var a = 3;
var b  = 4;

var a = 30; // O var pode ser redeclarado..Apesar de não ter motivo para fazer isso
//let b = 40; // o let não pode redeclarar
b = 40;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5; //tudo que não tiver motivo pra mudar, declarar como const
//c = 50

console.log(c);
