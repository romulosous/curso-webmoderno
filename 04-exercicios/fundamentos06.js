function calcularJurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    //J = C . i . t
    return capitalInicial + (capitalInicial * (taxaJuros / 100) * tempoAplicacao);
}

function calcularJurosComposto(capitalInicial, taxaJuros, tempoAplicacao){
    return capitalInicial * ((1 + (taxaJuros / 100)) ** tempoAplicacao).toFixed(2); 
}

console.log(calcularJurosSimples(4000, 10, 10));
console.log(calcularJurosComposto(4000, 10, 10));