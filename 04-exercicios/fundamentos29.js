function intervaloVetor(vetor) {
    let qtdDentroIntervalo = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdDentroIntervalo++;
        }
    }

    return `${qtdDentroIntervalo} valores dentro do intervalo [10,20].`;

}

let vetor = [12, 1, 4, 5, 7, 8, 99, 34, 23, 18, 20, 21, 23, 9, 8, 5, 10];

console.log(percorrerVetor(vetor));
