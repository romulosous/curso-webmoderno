function contarValoresNegativos(vetor) {
    let numNegativos = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            numNegativos++;
        }
    }
    return numNegativos;
}

let vetor = [11, 21, 34, 4, -5, 34, 6, 76, -64, -21, 35, 78, -8];
console.log(contarValoresNegativos(vetor));