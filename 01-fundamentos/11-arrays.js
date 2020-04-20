const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //não gera erro....da undefined...javascript é mai permissiva


valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

valores.shift(); //remover o primeiro elemento
console.log(valores);

valores.unshift('teste') // adiciona no inicio
console.log(valores);

console.log(typeof valores);
