// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// let nome = pessoa.nome; forma padrão

//forma simplificada
const {nome, idade} = pessoa; //tire de dentro do objeto o atributo nome e idade...do objto pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: { logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);

const {conta: { ag, num}}= pessoa; // vai gerar um erro
console.log(ag, num);
