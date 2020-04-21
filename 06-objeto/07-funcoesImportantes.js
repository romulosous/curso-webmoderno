const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // pegar as chaves de um objeto
console.log(Object.values(pessoa)); // pegar valores de um objeto
console.log(Object.entries(pessoa)); // funcao nova do Ecmascript 2015 - retorna arrays que tem subarrays com chaves e valores

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Para tambem poder definir algumas propriedades - tem mais controle dessa forma
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1};
const o1 = { b: 2}
const o2 = { c: 3, a: 4};
const obj = Object.assign(dest, o1, o2); // o objeto gerado é a concatenacao de todos os elementos

Object.freeze(obj);
obj.c = 1234;
console.log(obj);





 