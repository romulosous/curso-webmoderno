const prod1 = {}; //Objeto em javascript é uma coleção de chave valor
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;

//notação colchete
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
};



