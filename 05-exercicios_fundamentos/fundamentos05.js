function formatarValorDecimal(valor){
    let valorEmReais = `R$ ${valor.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais); 
}

formatarValorDecimal(0.1+0.2);