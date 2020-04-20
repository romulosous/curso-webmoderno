const pai = { nome: 'Pedro', corCabelo: 'preto'};

const filha1 = Object.create(pai); // passando o objeto que quero que seja o prototipo do objeto criado.
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
}); // alem de passar o protipo, eu já posso definir os atributos...definir algumas propriedades do objeto

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2){
    filha2.hasOwnProperty(key)? console.log(key): console.log(`Por herança: ${key}`); // verificar si o atributo pertence ao mesmo objeto retorna true...si recebe de heranca retorna false
}