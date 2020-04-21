function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
const produto1 = criarProduto('Ipad', 1200.00);
console.log(produto1);
console.log(criarProduto("Celular", 1200.00));
console.log(criarProduto("notebook", 2199.99));