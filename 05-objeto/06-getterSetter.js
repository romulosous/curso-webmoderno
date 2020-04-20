// const sequencia = {
//     _valor: 1, // convenção
//     setValor(valor){
//         this._valor = valor
//     },
//     getValor() {return this._valor}
// }

// console.log(sequencia.getValor())
// sequencia.setValor(10000);
// console.log(sequencia.getValor())

const sequencia = {
    _valor: 1, // convenção
    get valor(){ return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);



