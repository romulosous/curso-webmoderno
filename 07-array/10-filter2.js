Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: false},
    {nome: 'Copo de Vidro', preco: 1400.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtoCaro = function (produto){
    return produto.preco > 500;
}

const produtoFragil = function(produto){
    return produto.fragil;
} 

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil));