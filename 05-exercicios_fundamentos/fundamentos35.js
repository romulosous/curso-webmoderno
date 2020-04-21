const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

function adicionarNoVetor(vetorInicial, vetorAdicionar){
    for(let i = 0; i< vetorAdicionar.length; i++){
        vetorInicial.push(vetorAdicionar[i]);
    }

    console.log(`Vetor adicionado: ${vetorAdicionar}`);
    console.log(`Vetor resultado: ${vetorInicial}`);

}

adicionarNoVetor(vetorPilha, vetorAdiciona);
