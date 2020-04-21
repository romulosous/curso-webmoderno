let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor...dizendo que nao aponta pra nenhum objeto da memoria
console.log(valor);
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);


produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null; //sem preco
console.log(!!produto.preco);
console.log(produto);

