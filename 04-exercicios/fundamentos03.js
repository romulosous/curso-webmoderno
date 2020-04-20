function potencia(base, expoente){
    //podemos fazer de duas maneiras
    //metodo antigo
    let resultado = Math.pow(base, expoente);
    //metodo novo
    resultado =  base ** expoente;

    return resultado;
}

console.log(potencia(2,2));