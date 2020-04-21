// function calcularMedia(codigoAluno, nota1, nota2, nota3){
//     let media;
//     if(nota1 > nota2 && nota1 > nota3){
//         media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10;
//     }else if( nota2 > nota3){
//         media = (nota1 * 3 + nota2 * 4 + nota3 * 3) / 10;
//     }else{
//         media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
//     }

//     let resultado = media >= 5? "APROVADO" : "REPROVADO";
//     console.log(`Código do Aluno: ${codigoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}.${resultado}`); 
    
// }

// calcularMedia(123, 2.8, 6, 3.5);
// calcularMedia(456, 10, 10, 10);

function calcularNotaFinal(codigoAluno, nota1, nota2, nota3){
    let notas = [];
    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);
    notas.sort((a,b) => a - b);

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;

    console.log(`Código do Aluno: ${codigoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Media: ${mediaFinal}. ${mediaFinal >= 5 ? 'Aprovado.' : 'Reprovado' }`);
}

calcularNotaFinal(123, 2.8, 6, 3.5);