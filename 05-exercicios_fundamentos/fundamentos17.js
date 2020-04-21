function calcularSalario(planoTrabalho, salarioAtual ){
    switch(planoTrabalho){
        case 'A':
            return salarioAtual * 0.10;
        case 'B':
            return salarioAtual * 0.15;
        case 'C':
            return salarioAtual * (20/100);
        default:
            return 'O plano é inválido.';
    }
}

console.log(calcularSalario('A', 1000));