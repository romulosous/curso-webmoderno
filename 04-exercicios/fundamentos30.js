function percorrerVetor(vetor){
    let maior = -Infinity;
    let menor = +Infinity;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i];
        }
        if(vetor[i] < menor){
            menor = vetor[i];
        }
    }

    return [maior, menor];

}

let vetor = [11,21,34,4,5,34,6,76,64,21,35,78,8];

console.log(percorrerVetor(vetor));