function calcularValorProduto(codigoProduto, quantidade){
    //let valor = 0;
    switch(codigoProduto){
        
        case 100:
            return 'Valor: R$ ' + (3.00 * quantidade).toFixed(2).toString().replace('.', ',');
        case 200:
            return 'Valor: R$ ' + (4.00 * quantidade).toFixed(2).toString().replace('.', ',');
        case 300:
            return 'Valor: R$ ' + (5.50 * quantidade).toFixed(2).toString().replace('.', ',');
        case 400:
            return 'Valor: R$ ' + (7.50 * quantidade).toFixed(2).toString().replace('.', ',');
        case 500:
            return 'Valor: R$ ' + (3.50 * quantidade).toFixed(2).toString().replace('.', ',');
        case  600:
            return 'Valor: R$ ' + (2.80 * quantidade).toFixed(2).toString().replace('.', ',');
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularValorProduto(100, 3));
console.log(calcularValorProduto(200, 3));
console.log(calcularValorProduto(300, 3));
console.log(calcularValorProduto(400, 3));
console.log(calcularValorProduto(500, 3));
console.log(calcularValorProduto(600, 3));