const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false;
}))

const produtoCaro = function (produto){
    return produto.preco > 500;
}

const produtoFragil = function(produto){
    return produto.fragil;
} 

console.log(produtos.filter(produtoCaro).filter(produtoFragil));