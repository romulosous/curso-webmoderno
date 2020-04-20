function paresImpares(vetor) {
    let pares = 0;
    let impares = 0;
    for (num of vetor) {
        if (num % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Pares: ${pares}. Impares: ${impares}`);
}

let vetor = [1, 2, 33, 47, 5, 6, 17, 98, 9, 27, 11, 12, 13, 14];

paresImpares(vetor);