function calcularMediaVetor(vetor){
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }

    let media = soma / vetor.length;

    return media.toFixed(2);
}

let vetor = [10,2,4,4,5,10,8,8];
console.log(calcularMediaVetor(vetor));