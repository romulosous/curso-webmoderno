// let => escopo global, funcao e bloco
var numero = 1;
{
    let numero = 2;
    console.log('Dentro = ',numero); // caso nao tenha no escopo, ira procurar no escopo mais abrangente até encontra
}
console.log('Fora = ', numero);